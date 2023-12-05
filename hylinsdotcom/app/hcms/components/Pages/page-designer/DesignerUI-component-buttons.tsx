import { CiEdit } from "react-icons/ci";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

interface ComponentActions {
    moveComponent: (index: number, direction: string) => void;
    deleteComponent: (index: number) => void;
    i: number;
  }

const CompDesignerBtns = (props: ComponentActions) => {
    const { moveComponent, deleteComponent, i } = props

    return (
        <>
        <div className="absolute top-2 right-2 flex">
        <button className="btn btn-primary mx-2">
          <CiEdit />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            moveComponent(i, "up");
          }}
          className={`btn btn-primary mx-2 ${
            i === 0 ? "hidden" : ""
          }`}
        >
          <FaArrowUp />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            moveComponent(i, "down");
          }}
          className={`btn btn-primary mx-2`}
        >
          <FaArrowDown />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteComponent(i);
          }}
          className="btn btn-primary mx-2"
        >
          X
        </button>
      </div>
      </>
    )
}

export default CompDesignerBtns