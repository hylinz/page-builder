import { FaRegCircleQuestion } from "react-icons/fa6";

interface Option {
  value: string;
  label: string;
}

interface DropDownProps {
  name: string;
  label: string;
  disabled?: boolean | undefined;
  toolTip?: string;
  defaultValue?: string;
  options?: Option[];
}

interface TextFieldProps {
  name: string;
  label: string;
  disabled?: boolean | undefined;
  toolTip?: string;
}

export const TextField = (props: TextFieldProps) => {
  const { name, label, disabled, toolTip } = props;

  return (
    <>
      <label className="label-text text-secondary font-bold">{label || ""}</label>
      <div className="flex items-center">
        <input
          disabled={disabled || false}
          type="text"
          name={name || ""}
          className="input input-bordered w-full max-w-xs"
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

export const DropDown = (props: DropDownProps) => {
  const { name, label, disabled, toolTip, defaultValue, options } = props;

  return (
    <>
      <div className="flex flex-col" >
        <label className="label-text text-secondary font-bold">{label}</label>
        <div className="flex">
          <select
            name={name}
            disabled={
              disabled === undefined ? false : disabled === true ? true : false
            }
            className="select select-bordered w-full max-w-xs"
            defaultValue={defaultValue}
          >
            {options
              ? options.map((option, i) => (
                  <option key={Math.random()} value={option.value}>
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

export const TextArea = (props: TextFieldProps) => {
  const { name, label, disabled, toolTip } = props;

  return (
    <>
      <label className="label-text text-secondary font-bold">{label || ""}</label>
      <div className="flex items-center">
        <textarea
          disabled={disabled || false}
          name={name || ""}
          className="textarea textarea-bordered"
          maxLength={2000}
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
