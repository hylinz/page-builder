"use client";
import { ChangeEvent, useState } from "react";
import { DropDown, NumberInput, RangeInput, TextArea, TextField } from "./PageDesignerEditFields";
import { MdCloseFullscreen } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

interface ComponentSettings {
  handleUpdateSettings: (settings: any, componentIndex: any) => void;
  settings: any;
  componentIndex: number;
}

const ComponentSettings = (props: ComponentSettings) => {
  const { handleUpdateSettings, settings, componentIndex } = props;
  const [showEditor, setShowEditor] = useState(false);
  const [settingsState, setSettingsState] = useState(settings)

  const handleSettingChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, settingIndex: number) => {
      settings[settingIndex].value = e.target.value
      handleUpdateSettings(settings, componentIndex)
  }

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
        key={componentIndex}
      >
        <div className="grid grid-cols-2 gap-4 max-w-screen-lg w-full px-4 pb-9">
          {settings
            ? settings.map(
                (setting: any, i: number) =>
                  setting?.type === "dropDown" ? (
                    <div key={i}>
                      <DropDown
                        settingsState={settingsState}
                        settingIndex={i}
                        handleSettingChange={handleSettingChange}
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
                        settingsState={settingsState}
                        settingIndex={i}
                        handleSettingChange={handleSettingChange}
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        placeholder={setting?.placeholder}
                        max={settings?.max}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                      />
                    </div>
                  ) : setting?.type === "textarea" ? (
                    <div key={i}>
                      <TextArea
                        settingsState={settingsState}
                        settingIndex={i}
                        handleSettingChange={handleSettingChange}
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        max={settings?.max}
                        placeholder={setting?.placeholder}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                      />
                    </div>
                  ) : setting?.type === "number" ? (
                    <div key={i}>
                      <NumberInput
                        settingsState={settingsState}
                        settingIndex={i}
                        handleSettingChange={handleSettingChange}
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                        placeholder={setting?.placeholder}
                        max={setting?.max}
                        min={setting?.min}
                      />
                    </div>
                  ) : setting?.type === "range" ? (
                    <div key={i}>
                      <RangeInput
                        settingsState={settingsState}
                        settingIndex={i}
                        handleSettingChange={handleSettingChange}
                        name={setting.style} // Changed from settings.style
                        label={setting.label}
                        disabled={setting?.disabled} // Changed from settings.disabled
                        toolTip={setting?.toolTip || ""}
                        max={setting?.max}
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
