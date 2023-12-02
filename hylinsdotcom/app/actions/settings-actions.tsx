"use server";
import { connectToDB } from "@/app/lib/utils";
import { Pages } from "@/app/lib/models";
import { ActionResponse, FormResponse } from "@/app/lib/types";
import { revalidatePath } from "next/cache";


export const UpdateHeaderConfig = async (
    prevState: FormResponse,
    formData: FormData
  ) => {
    const {
        headerEnabled,
        style,
        menuEnabled,
        menuOptions,
      } = Object.fromEntries(formData);
  
    const response: FormResponse = {
      success: false,
      message: "",
      errors: [],
      fieldValues: {
        headerEnabled: headerEnabled,
        style: style,
        menuEnabled: menuEnabled,
        menuOptions: menuOptions
      },
    };
  
    if (menuEnabled) {
        console.log('yep')
    }
    return response
    //// TO DO ALL FUCKING BACKEND
    console.log(headerEnabled, style, menuEnabled, menuOptions)
    
    try {
      connectToDB();

      revalidatePath("/manage/");
  
      return response
    } catch (error) {
      console.log(`Failed to find products: ${error}`);
      return response;
    }
  };