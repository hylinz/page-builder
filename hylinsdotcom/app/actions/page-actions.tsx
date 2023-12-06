"use server";
import { connectToDB } from "@/app/lib/utils";
import { Pages } from "@/app/lib/models";
import { ActionResponse } from "@/app/lib/types";

export const createNewPage = async (formData: FormData) => {
  let response: ActionResponse = {
    success: false,
    message: "",
    data: [],
  };
  

  const pageData = formData.get("pageData")
  const parsedPageData = pageData ? JSON.parse(pageData as string) : null;

  console.log(parsedPageData)
  return

  try {
    // DB stuff here
    connectToDB();

    const newPage = new Pages({
      title: "mypage",
      body: [
        {
          type: "p",
          style: "normal",
          custom: "",
          text: "Welcome to my page",
        },
        {
          type: "normal",
          style: "normal",
          custom: "",
          text: "You can type out a bunch of stuff here and it will be rendered on the page, hopefully.. lets not say the hi before we do the ho.",
        },
      ],
      template: "article",
      settings: [
        {
          name: "Visible",
          description: "Should this page be visible?",
          value: true,
        },
      ],
    });
    await newPage.save();
  } catch (error) {
    console.log(`Failed to add page: ${error}`);
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
