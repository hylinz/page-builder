"use client";
import { Page } from "@/app/lib/types";
import { useState } from "react";
import PagesInfoUI from "./PagesInfoUI";

const PagesUI = (props: any) => {
  const ActiveClass =
    "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue";
  const InactiveClass =
    "border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 transition-colors duration-200";
  const { data } = props;
  const pageData = JSON.parse(data);
  const templates: string[] = Array.from(
    new Set(pageData.map((page: Page) => page.template))
  );


  const [currentTab, setCurrentTab] = useState(0);
  const [currentTabArticle, setCurrentTabArticle] = useState(templates.length > 0 ? templates[0] : '');

  const handleTabSwitch = (i: number, template: string) => {
    setCurrentTab(i)
    setCurrentTabArticle(template)
  };

  return (
    <>
      <div className="flex w-full bg-primary py-2 px-4 border-b-2 rounded shadow">
        <div className=" border-gray-200 -700 flex-1">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center  w-full">
            {templates && templates.length > 0
              ? templates.map((template, i) => (
                  <li className="me-2" key={i}>
                    <button
                      onClick={() => handleTabSwitch(i, template)}
                      className={`inline-flex items-center justify-center p-4 border-b-2 ${
                        currentTab === i ? ActiveClass : InactiveClass
                      } group`}
                    >
                      {`${
                        template.charAt(0).toUpperCase() + template.slice(1)
                      }s`}
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
      <section className="flex w-full bg-primary py-2 px-4 border-b-2 rounded shadow mt-4">
        <PagesInfoUI data={data} template={currentTabArticle}/>
      </section>
    </>
  );
};

export default PagesUI;
