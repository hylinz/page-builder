"use client";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegPlusSquare, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { UpdateHeaderConfig } from "@/app/actions/settings-actions";
import { toast } from "react-toastify";

export default function HeaderSettings() {
  const menuOptionInput = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  type RadioControl = {
    header: boolean;
    menu: boolean;
    [key: string]: boolean;
  };

  //////////////// Menu option ////////////////
  const [menuOptions, setMenuOptions] = useState<string[]>([]);
  const addMenuOption = () => {
    if (
      !menuOptionInput ||
      !menuOptionInput.current ||
      !menuOptionInput.current.value
    ) {
      return false;
    }

    const sanitizedValue = menuOptionInput.current.value.replace(
      /[^a-zA-Z0-9-_]/g,
      ""
    );

    setMenuOptions([...menuOptions, sanitizedValue]);
    menuOptionInput.current.value = "";
  };

  const deleteMenuOption = (i: number) => {
    if (i < 0 || i >= menuOptions.length) {
      return;
    }
    const updatedMenuOptions = [...menuOptions];
    updatedMenuOptions.splice(i, 1);
    setMenuOptions(updatedMenuOptions);
  };

  const moveMenuOption = (i: number, direction: string) => {
    if (i < 0 || i >= menuOptions.length) {
      return;
    }

    const updatedMenuOptions = [...menuOptions];

    if (direction === "up" && i !== 0) {
      // Move item up if not already at the start of the array
      const temp = updatedMenuOptions[i - 1];
      updatedMenuOptions[i - 1] = updatedMenuOptions[i];
      updatedMenuOptions[i] = temp;
    } else if (direction === "down" && i !== menuOptions.length - 1) {
      // Move item down if not already at the end of the array
      const temp = updatedMenuOptions[i + 1];
      updatedMenuOptions[i + 1] = updatedMenuOptions[i];
      updatedMenuOptions[i] = temp;
    }

    setMenuOptions(updatedMenuOptions);
  };

  //////////////// Menu option end ////////////////
  //////////////// Radio Control ////////////////

  const [radioControl, setRadioSetting] = useState<RadioControl>({
    header: true,
    menu: true,
  });

  const handleRadioChange = (key: keyof RadioControl) => {
    let updatedRadioControl: RadioControl;

    if (key === "header" && radioControl.header) {
      updatedRadioControl = {
        header: false,
        menu: false,
      };
    }
    if (key === "header" && !radioControl.header) {
      updatedRadioControl = {
        ...radioControl,
        header: true,
      };
    } else {
      updatedRadioControl = {
        ...radioControl,
        [key]: !radioControl[key],
      };
    }
    setRadioSetting(updatedRadioControl);
  };
  //////////////// Radio Control End ////////////////
  //////////////// Form State ////////////////
  const [formState, formAction] = useFormState(UpdateHeaderConfig, {
    success: false,
    message: "",
    errors: [],
    fieldValues: {
        headerEnabled: radioControl.header,
        style: "",
        menuEnabled: radioControl.menu,
        menuOptions: menuOptions
    },
  });
  useEffect(() => {
    if (formState && formState.success) {
      toast.success(formState && formState.message ? formState.message : "");
    }
  }, [formState]);
  

    //////////////// Form State End ////////////////



  return (
    <div className="p-4 w-full">
      <form ref={formRef} action={formAction} className="flex flex-col">
        {/* main header control */}
        <h3 className="font-semibold text-2xl border-b-2">
          General Header Settings
        </h3>
        <div className="flex items-center w-1/2 justify-start my-6">
          <label className="flex items-center font-semibold mr-4 text-l flex-1">
            Header enabled?
          </label>
          <div className="flex-1 flex items-center">
            <input
              type="checkbox"
              name="headerEnabled"
              className="toggle toggle-success"
              onChange={() => handleRadioChange("header")}
              checked={radioControl.header}
            />

            <button
              className="mx-2 tooltip"
              onClick={(e) => {
                e.preventDefault();
              }}
              data-tip="
            Should the header be enabled on the site? Turning this off means the menu will also be unavailable.
            "
            >
              <FaRegCircleQuestion className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* style  */}
        <div className="flex items-center w-1/2 justify-start my-6">
          <label className="flex items-center font-semibold mr-4 text-l flex-1">
            Choose a style for your header
          </label>
          <div className="flex-1 flex items-center">
            <select
              name="style"
              disabled={!radioControl.header}
              className="select select-secondary bg-primary text-secondary w-full max-w-xs"
              defaultValue="default" // Set defaultValue here
            >
              <option value="default" disabled>
                Select a style ...
              </option>
              <option value="default">Default</option>
            </select>
            <button
              className="mx-2 tooltip"
              onClick={(e) => {
                e.preventDefault();
              }}
              data-tip={`${
                !radioControl.header
                  ? "You cannot select a style for a disabled header :("
                  : "Choose a style form our template headers"
              }`}
            >
              <FaRegCircleQuestion className="h-6 w-6" />
            </button>
          </div>
        </div>

        <h3 className="font-semibold text-2xl border-b-2">
          Header Menu Settings
        </h3>

        {/* Menu control */}
        <div className="flex items-center w-1/2 justify-start my-6">
          <label className="flex items-center font-semibold mr-4 text-l flex-1">
            Menu enabled?
          </label>
          <div className="flex-1 flex items-center">
            <input
              type="checkbox"
              name="menuEnabled"
              className="toggle toggle-success bg-primary"
              onChange={() => handleRadioChange("menu")}
              checked={radioControl.menu && radioControl.header}
              disabled={!radioControl.header}
            />

            <button
              className="mx-2 tooltip"
              onClick={(e) => {
                e.preventDefault();
              }}
              data-tip={`${
                !radioControl.header
                  ? "Menu cannot be enabled if the header is disabled"
                  : "Should the menu be visible?"
              }`}
            >
              <FaRegCircleQuestion className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* menu options  */}

        <div
          className={`${
            !radioControl.header || !radioControl.menu
              ? "hidden"
              : "flex items-center w-full justify-start my-6"
          }`}
        >
          <label className="flex items-center font-semibold mr-4 text-l">
            Menu links
          </label>
          <label className="mx-2 text-center font-medium">Add a Page</label>

          <input
            type="text"
            className="input input-bordered input-secondary max-w-xs bg-primary"
            placeholder="mypagename"
            ref={menuOptionInput}
          />

            <input
            type="text"
            className="hidden"
            name="menuOptions"
            value={menuOptions}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addMenuOption();
            }}
            className="mx-2"
          >
            <FaRegPlusSquare className="w-6 h-6" />
          </button>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-success flex">
              <CiMenuBurger className="text-secondary" />
              <p>Preview</p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuOptions
                ? menuOptions.map((option, index) => (
                    <li key={index} className="flex flex-row">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="flex-1"
                      >
                        {option}
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          moveMenuOption(index, "up");
                        }}
                      >
                        <FaArrowUp />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          moveMenuOption(index, "down");
                        }}
                      >
                        <FaArrowDown />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          deleteMenuOption(index);
                        }}
                      >
                        X
                      </button>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <button className="btn btn-success">Save settings</button>
      </form>

    </div>
  );
}
