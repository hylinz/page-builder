import { FaRegCircleQuestion } from "react-icons/fa6";

export default function GeneralSettings() {
  return (
    <div className="p-4 w-full">
      <form action="flex flex-col">
        {/* Site title */}
        <div className="flex items-center w-1/2 justify-start my-6">
          <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
            Site title
          </label>
          <div className="flex-1 flex items-center">
            <input
              type="text"
              name="siteTitle"
              className="input input-bordered input-secondary w-full max-w-xs bg-primary "
            />
            <button
              className="mx-2 tooltip"
              data-tip="
            The name of the site, this will also show up in metadata for SEO purposes
            "
            >
              <FaRegCircleQuestion className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Site description */}
        <div className="flex items-center w-1/2 justify-start my-6">
          <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
            Site Description
          </label>
          <div className="flex-1 flex items-center">
            <textarea
              name="siteDescription"
              className="textarea textarea-secondary bg-primary "
            />
            <button
              className="mx-2 tooltip"
              data-tip="
            The description of the site, this will also show up in metadata for SEO purposes
            "
            >
              <FaRegCircleQuestion className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* robots.txt */}

        <div className="flex items-center w-1/2 justify-start my-6">
          <label className="flex items-center font-semibold mr-4 text-2xl flex-1">
            Robots.txt
          </label>
          <div className="flex-1 flex items-center">
            <textarea
              name="robots"
              className="textarea textarea-secondary bg-primary "
            />
            <button
              className="mx-2 tooltip"
              data-tip="
            Instructions and rules for crawlers and robots 
            "
            >
              <FaRegCircleQuestion className="h-6 w-6" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}