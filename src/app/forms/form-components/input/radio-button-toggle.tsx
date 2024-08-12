"use client"
import { FaRegCircleQuestion } from "react-icons/fa6";

interface Props {
    name: string;
    toolTip?: string;
    conditionalToolTip?: string;
    toolTipCondition?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    checked?: boolean; 
}

const RadioButtonToggle = (props: Props) => {
  const { name, toolTip, conditionalToolTip, toolTipCondition, disabled, onChange, checked } = props;

  return (
    <div className="flex-1 flex items-center">
      <input
        type="checkbox"
        disabled={disabled === undefined ? false : disabled === true ? true : false}
        name={name}     
        className="toggle toggle-success"
        onChange={onChange} 
        checked={checked} 
      />

      <button
        className="mx-2 tooltip"
        onClick={(e) => {
          e.preventDefault();
        }}
        
        data-tip={
            toolTipCondition ? toolTip :
            conditionalToolTip && !toolTipCondition ? conditionalToolTip :
            toolTip || ''
          }
          
          
                >
        <FaRegCircleQuestion className="h-5 w-5" />
      </button>
    </div>
  );
};

export default RadioButtonToggle;

