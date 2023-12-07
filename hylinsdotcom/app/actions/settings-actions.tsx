"use server";
import { connectToDB } from "@/app/lib/utils";
import { GeneralSettings, Pages } from "@/app/lib/models";
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
  
    if (!menuEnabled) {
        console.log('yep')
    }

//    console.log(headerEnabled, style, menuEnabled, menuOptions)

    console.log(menuOptions)
    return response
    
    try {
      connectToDB();

      // First we need to check if the settings have been set up
      const currentSettings = await GeneralSettings.find({});


      // No settings, create a new one, simple! In the future this should probably move..
      // Idea: create an initial set up form that sets up the application as such there should always be a settings document
      if (currentSettings.length <= 0) {


      }

      //settings exist, update the settings



      return response



      revalidatePath("/manage/");
  
      return response
    } catch (error) {
      console.log(`Failed to update settings: ${error}`);
      return response;
    }
  };