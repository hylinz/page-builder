"use server";
import { connectToDB } from "@/app/lib/utils";
import { Pages } from "@/app/lib/models";
import { ActionResponse, CreatePageResponse } from "@/app/lib/types";

export const createNewPage = async (
  prevState: CreatePageResponse,
  formData: FormData
) => {
  const pageTitle = formData.get("pageTitle") || "";
  const pageDesc = formData.get("pageDesc") || "";
  let pageUrl = formData.get("pageUrl") || "";
  const pageData = formData.get("pageData") || "";

  const response: CreatePageResponse = {
    success: false,
    message: "",
    errors: [],
    fieldValues: {
      pageTitle: "",
      pageDesc: "",
      pageUrl: "",
      pageData: "",
    },
  };

  
  if (!(typeof pageUrl === "string") || !pageUrl.match(/[\w-]+$/)) {
    response.success = false;
    response.errors.push({name: 'pageUrl', message: 'Invalid URL format, use alphanumeric numbers and valid url characters.'})
  }
  

  return response;

  try {
    connectToDB();
  } catch (error) {
    return response;
  }
};

export const getPageData = async (name: string) => {
  let response: ActionResponse = {
    success: false,
    message: "",
    data: [],
  };

  if (!name) {
    return response;
  }

  const pageName = name.toString().toLowerCase();

  try {
    connectToDB();

    const pageData = await Pages.findOne({ title: pageName });
    // No page data found
    if (!pageData || pageData.length === 0) {
      return {
        success: false,
        message: `Could not find /${pageName}`,
        data: [],
      };
    }

    response.success = true;
    response.data = pageData;

    return response;
  } catch (error) {
    console.log(`Failed to add note: ${error}`);
    return {
      success: false,
      message: `Could not find /${pageName}`,
      data: [],
    };
  }
};

export const getAllPages = async () => {
  let response: ActionResponse = {
    success: false,
    message: "",
    data: [],
  };

  try {
    connectToDB();

    const pageData = await Pages.find();
    // No page data found
    if (!pageData || pageData.length === 0) {
      return {
        success: false,
        message: `Could not find pages`,
        data: [],
      };
    }

    response.success = true;
    response.data = pageData;

    return response;
  } catch (error) {
    console.log(`Failed to add note: ${error}`);
    return {
      success: false,
      message: `Could not find pages`,
      data: [],
    };
  }
};
