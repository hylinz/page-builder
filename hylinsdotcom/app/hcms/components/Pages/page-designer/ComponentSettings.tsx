"use client";
import { useState } from "react";
import { DropDown, TextArea, TextField } from "./PageDesignerEditFields";
import { MdCloseFullscreen } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

interface ComponentSettings {
  settings: any;
  index: number;
}

const ComponentSettings = (props: ComponentSettings) => {
  const { settings, index } = props;

  const [showEditor, setShowEditor] = useState(false);

  return (
    <>
      <div className="flex justify-end p-4 border-r-2 border-l-2 bg-base-200">
        {showEditor ? (
          <MdCloseFullscreen
            className="top-5 right-5 text-2xl hover:cursor-pointer"
            onClick={() => setShowEditor(!showEditor)}
          />
        ) : (
          <CiEdit
            className="top-5 right-5 text-2xl hover:cursor-pointer"
            onClick={() => setShowEditor(!showEditor)}
          />
        )}
      </div>
      <div
        className={`${
          showEditor ? "flex" : "hidden"
        } justify-center bg-base-200`}
        key={index}
      >
        <div className="grid grid-cols-2 gap-4 max-w-screen-lg w-full px-4 pb-9">
          {settings
            ? settings.map(
                (setting: any, i: number) =>
                  setting?.type === "dropDown" ? (
                    <div key={i}>
                      <DropDown
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                        defaultValue=""
                        options={
                          setting?.options || [
                            {
                              value: "",
                              label: "No data found",
                            },
                          ]
                        }
                      />
                    </div>
                  ) : setting?.type === "input" ? (
                    <div key={i}>
                      <TextField
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                      />
                    </div>
                  ) : setting?.type === "textarea" ? (
                    <div key={i}>
                      <TextArea
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                      />
                    </div>
                  ) : null // Returning null when the condition isn't met
              )
            : null}
        </div>
      </div>
    </>
  );
};

export default ComponentSettings;
