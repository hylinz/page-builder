import { ChangeEvent } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

interface Option {
  value: string;
  label: string;
}

interface DropDownProps {
  handleSettingChange: (
    e: ChangeEvent<HTMLSelectElement>,
    settingIndex: number
  ) => void;
  settingsState: any;
  settingIndex: number;
  name: string;
  label: string;
  disabled?: boolean | undefined;
  toolTip?: string;
  defaultValue?: string;
  options?: Option[];
}

interface TextFieldProps {
  handleSettingChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    settingIndex: number
  ) => void;
  settingsState: any;
  settingIndex: number;
  name: string;
  label: string;
  max?: number;
  placeholder?: string;
  disabled?: boolean | undefined;
  toolTip?: string;
}

interface NumberFieldProps {
  handleSettingChange: (
    e: ChangeEvent<HTMLInputElement>,
    settingIndex: number
  ) => void;
  settingsState: any;
  settingIndex: number;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean | undefined;
  max?: number;
  min?: number;
  toolTip?: string;
}

interface RangeFieldProps {
  handleSettingChange: (
    e: ChangeEvent<HTMLInputElement>,
    settingIndex: number
  ) => void;
  settingsState: any;
  settingIndex: number;
  name: string;
  label: string;
  disabled?: boolean | undefined;
  max?: number;
  toolTip?: string;
}

export const DropDown = (props: DropDownProps) => {
  const {
    handleSettingChange,
    settingsState,
    settingIndex,
    name,
    label,
    disabled,
    toolTip,
    defaultValue,
    options,
  } = props;

  return (
    <>
      <div className="flex flex-col">
        <label className="label-text text-secondary font-bold">{label}</label>
        <div className="flex">
          <select
            name={name}
            onChange={(e) => handleSettingChange(e, settingIndex)}
            disabled={
              disabled === undefined ? false : disabled === true ? true : false
            }
            className="select select-bordered w-full max-w-xs"
            value={
              settingsState ? settingsState[settingIndex].value.toString() : ""
            }
            defaultValue={defaultValue}
          >
            {options
              ? options.map((option, i) => (
                  <option className={option.value} value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))
              : ""}
          </select>
          <button
            className="mx-2 tooltip"
            onClick={(e) => {
              e.preventDefault();
            }}
            data-tip={toolTip || ""}
          >
            <FaRegCircleQuestion className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export const TextField = (props: TextFieldProps) => {
  const {
    handleSettingChange,
    settingsState,
    settingIndex,
    name,
    label,
    max,
    disabled,
    toolTip,
  } = props;
  
  return (
    <>
      <label className="label-text text-secondary font-bold">
        {label || ""}
      </label>
      <div className="flex items-center">
        <input
          disabled={disabled || false}
          type="text"
          onChange={(e) => handleSettingChange(e, settingIndex)}
          name={name || ""}
          maxLength={max}
          className="input input-bordered w-full max-w-xs"
          value={
            settingsState ? settingsState[settingIndex].value.toString() : ""
          }
        />
        <button
          className="mx-2 tooltip"
          onClick={(e) => {
            e.preventDefault();
          }}
          data-tip={toolTip || ""}
        >
          <FaRegCircleQuestion className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export const TextArea = (props: TextFieldProps) => {
  const {
    handleSettingChange,
    settingsState,
    settingIndex,
    name,
    label,
    placeholder,
    max,
    disabled,
    toolTip,
  } = props;

  return (
    <>
      <label className="label-text text-secondary font-bold">
        {label || ""}
      </label>
      <div className="flex items-center">
        <textarea
          disabled={disabled || false}
          onChange={(e) => handleSettingChange(e, settingIndex)}
          value={
            settingsState ? settingsState[settingIndex].value.toString() : ""
          }
          name={name || ""}
          placeholder={placeholder ? placeholder : ""}
          className="textarea textarea-bordered"
          maxLength={max}
        />

        <button
          className="mx-2 tooltip"
          onClick={(e) => {
            e.preventDefault();
          }}
          data-tip={toolTip || ""}
        >
          <FaRegCircleQuestion className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export const NumberInput = (props: NumberFieldProps) => {
  const {
    handleSettingChange,
    settingsState,
    settingIndex,
    name,
    label,
    placeholder,
    disabled,
    toolTip,
    max,
    min,
  } = props;

  return (
    <>
      <label className="label-text text-secondary font-bold">
        {label || ""}
      </label>
      <div className="flex items-center">
        <input
          type="number"
          disabled={disabled || false}
          onChange={(e) => handleSettingChange(e, settingIndex)}
          value={
            settingsState ? settingsState[settingIndex].value.toString() : ""
          }
          name={name || ""}
          placeholder={placeholder ? placeholder : ""}
          className="input input-bordered"
          max={max || 100}
          min={min || 0}
        />

        <button
          className="mx-2 tooltip"
          onClick={(e) => {
            e.preventDefault();
          }}
          data-tip={toolTip || ""}
        >
          <FaRegCircleQuestion className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export const RangeInput = (props: RangeFieldProps) => {
  const {
    handleSettingChange,
    settingsState,
    settingIndex,
    name,
    label,
    disabled,
    toolTip,
    max,
  } = props;

  return (
    <>
      <label className="label-text text-secondary font-bold">
        {label || ""}
      </label>
      <div className="flex items-center">
        <input
          type="range"
          min={0}
          max={max}
          value={
            settingsState ? settingsState[settingIndex].value.toString() : "70"
          }
          className="range"
          name={name || ""}
          onChange={(e) => handleSettingChange(e, settingIndex)}
        />
        <button
          className="mx-2 tooltip"
          onClick={(e) => {
            e.preventDefault();
          }}
          data-tip={toolTip || ""}
        >
          <FaRegCircleQuestion className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export const Toggle = () => {};
