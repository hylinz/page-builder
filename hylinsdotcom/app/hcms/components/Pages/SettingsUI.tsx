"use client";

import { useState } from "react";
import HeaderSettings from "../HeaderSettings";
import GeneralSettings from "../GeneralSettings";
import FooterSettings from "../FooterSettings";
import SocialSettings from "../SocialSettings";
import AdvancedSettings from "../AdvancedSettings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SettingsUI(props: any) {
  const [currentTab, setCurrentTab] = useState("general");
  const ActiveClass =
    "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue";
  const InactiveClass =
    "border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 transition-colors duration-200";

  return (
    <>
      <div className="flex w-full bg-primary py-2 px-4 border-b-2 rounded shadow">
        <div className=" border-gray-200 -700 flex-1">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center  w-full">
            <li className="me-2">
              <button
                onClick={() => setCurrentTab("general")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  currentTab === "general" ? ActiveClass : InactiveClass
                } group`}
              >
                General
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setCurrentTab("header")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  currentTab === "header" ? ActiveClass : InactiveClass
                } group`}
              >
                Header
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setCurrentTab("footer")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  currentTab === "footer" ? ActiveClass : InactiveClass
                } group`}
              >
                Footer
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setCurrentTab("social")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  currentTab === "social" ? ActiveClass : InactiveClass
                } group`}
              >
                Social
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setCurrentTab("advanced")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  currentTab === "advanced" ? ActiveClass : InactiveClass
                } group`}
              >
                Advanced
              </button>
            </li>
          </ul>
        </div>
      </div>
      <section className="flex w-full bg-primary py-2 px-4 border-b-2 rounded shadow mt-4">
        {currentTab === "general" ? <GeneralSettings /> : null}
        {currentTab === "header" ? <HeaderSettings /> : null}
        {currentTab === "footer" ? <FooterSettings /> : null}
        {currentTab === "social" ? <SocialSettings /> : null}
        {currentTab === "advanced" ? <AdvancedSettings /> : null}
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
