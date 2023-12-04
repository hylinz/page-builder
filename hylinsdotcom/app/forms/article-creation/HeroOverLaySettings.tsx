"use client";
import { FaRegCircleQuestion } from "react-icons/fa6";
import DropDownList from "../form-components/input/drop-down";

export default function HeroOverLaySettings() {
  return (
    <>
      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Main Title (optional)
        </label>
        <div className="flex-1 flex items-center">
          <input
            type="text"
            name="HeroOverLayHeaderTitle"
            className="input input-bordered input-secondary w-full max-w-xs bg-primary "
          />
          <button
            className="mx-2 tooltip"
            data-tip="
            This is usually used when this component is used at the top of the page, it will output a bigger title than the others.
            "
          >
            <FaRegCircleQuestion
              onClick={(e: Event) => {
                e.preventDefault();
              }}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Content (optional)
        </label>
        <div className="flex-1 flex items-center">
          <input
            type="text"
            name="HeroOverLayTitleContent"
            className="input input-bordered input-secondary w-full max-w-xs bg-primary "
          />
          <button
            className="mx-2 tooltip"
            data-tip="
            The content that goes below the header on the image
            "
          >
            <FaRegCircleQuestion
              onClick={(e: Event) => {
                e.preventDefault();
              }}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Background Image URL
        </label>
        <div className="flex-1 flex items-center">
          <input
            type="text"
            name="HeroOverLayImage"
            className="input input-bordered input-secondary w-full max-w-xs bg-primary "
          />
          <button
            className="mx-2 tooltip"
            data-tip="
            This can be an external url (https://*) or it can be a static image in the public folder on the server (/myimage.jpg), if no image is provided a background color will be applied.
            "
          >
            <FaRegCircleQuestion
              onClick={(e: Event) => {
                e.preventDefault();
              }}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Text Color
        </label>
        <div className="flex-1 flex items-center">
        <DropDownList
            name="HeroOverLayTextColor"
            tooltipEnabledMessage="Choose a color for the text of this section, leave blank for default"
            defaultValue=""
            options={[
              {
                value: "",
                label: "Select one ...",
              },
              {
                value: "text-primary",
                label: "Primary",
              },
              {
                value: "text-secondary",
                label: "Secondary",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Button Text
        </label>
        <div className="flex-1 flex items-center">
        <input
            type="text"
            name="HeroOverLayBtnText"
            maxLength={20}
            className="input input-bordered input-secondary w-full max-w-xs bg-primary "
          />
          <button
            className="mx-2 tooltip"
            data-tip="
            What should the button say?
            "
          >
            <FaRegCircleQuestion
              onClick={(e: Event) => {
                e.preventDefault();
              }}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Button Url
        </label>
        <div className="flex-1 flex items-center">
        <input
            type="text"
            name="HeroOverLayBtnUrl"
            maxLength={100}
            className="input input-bordered input-secondary w-full max-w-xs bg-primary "
          />
          <button
            className="mx-2 tooltip"
            data-tip="
            Where should the button take you?
            "
          >
            <FaRegCircleQuestion
              onClick={(e: Event) => {
                e.preventDefault();
              }}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-start my-6">
        <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
          Button Color
        </label>
        <div className="flex-1 flex items-center">
        <DropDownList
            name="HeroOverLayBtnColor"
            tooltipEnabledMessage="Choose a color for the button of this section, leave blank for default"
            defaultValue=""
            options={[
              {
                value: "",
                label: "Select one ...",
              },
              {
                value: "btn-primary",
                label: "Primary",
              },
              {
                value: "btn-secondary",
                label: "Secondary",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
