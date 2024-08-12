import { FaRegCircleQuestion } from "react-icons/fa6";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  disabled?: boolean | undefined;
  tooltipDisabledMessage?: string;
  tooltipEnabledMessage?: string;
  toolTipCondition?: boolean;
  defaultValue?: string;
  options?: Option[];
}

const DropDownList = (props: Props) => {

const {name, disabled, tooltipDisabledMessage, tooltipEnabledMessage, toolTipCondition, defaultValue, options} = props

  return (
    <div className="flex-1 flex items-center">
      <select
        name={name}
        disabled={disabled === undefined ? false : disabled === true ? true : false}
        className="select select-secondary bg-primary text-secondary w-full max-w-xs"
        defaultValue={defaultValue}
      >
        {options ? options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )) : ''}
      </select>
      <button
        className="mx-2 tooltip"
        onClick={(e) => {
          e.preventDefault();
        }}
        data-tip={
            toolTipCondition ? tooltipEnabledMessage :
            tooltipDisabledMessage && !toolTipCondition ? tooltipDisabledMessage :
            tooltipEnabledMessage || ''
          }    
          
          >
        <FaRegCircleQuestion className="h-6 w-6" />
      </button>
    </div>
  );
};

export default DropDownList;
