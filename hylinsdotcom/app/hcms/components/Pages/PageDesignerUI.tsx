"use client";
import HeroText from "@/app/lib/templates/resources/common/HeroText";
import SectionText from "@/app/lib/templates/resources/common/SectionText";
import HeroOverlay from "@/app/lib/templates/resources/common/HeroOverlay";
import { CiEdit } from "react-icons/ci";
import { FaArrowDown, FaArrowUp, FaPlus } from "react-icons/fa";

import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { useState } from "react";
import CompDesignerBtns from "./DesignerUI-component-buttons";

export default function PageDesignerUI() {

  // Main controll state
  const [pageComponents, setPageComponents] = useState<string[]>([]);
  
  // Drag options
  const [draggingOver, setDragOver] = useState<boolean>(false);
  const handleComponentDrag = (e: React.DragEvent, componentType: string) => {
    e.dataTransfer.setData("componentType", componentType);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const componentType = e.dataTransfer.getData("componentType") as string;
    setPageComponents([...pageComponents, componentType]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  //////////////// Component option ////////////////

  const deleteComponent = (i: number) => {
    if (i < 0 || i >= pageComponents.length) {
      return;
    }
    const updatedPageComponents = [...pageComponents];
    updatedPageComponents.splice(i, 1);
    setPageComponents(updatedPageComponents);
  };

  const moveComponent = (i: number, direction: string) => {
    if (i < 0 || i >= pageComponents.length) {
      return;
    }

    const updatedPageComponents = [...pageComponents];

    if (direction === "up" && i !== 0) {
      // Move item up if not already at the start of the array
      const temp = updatedPageComponents[i - 1];
      updatedPageComponents[i - 1] = updatedPageComponents[i];
      updatedPageComponents[i] = temp;
    } else if (direction === "down" && i !== pageComponents.length - 1) {
      // Move item down if not already at the end of the array
      const temp = updatedPageComponents[i + 1];
      updatedPageComponents[i + 1] = updatedPageComponents[i];
      updatedPageComponents[i] = temp;
    }

    setPageComponents(updatedPageComponents);
  };

  //////////////// Menu option end ////////////////

  return (
    <>
      <section className="w-full overflow-auto p-4 bg-primary">
        <Header preview={true} />
        <div
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          className=" shadow flex-co w-full h-full flex-col"
        >
          {pageComponents && pageComponents.length > 0 ? (
            pageComponents.map((component: string, i: number) =>
              component === "heroText" ? (
                <div className="relative" key={i}>
                  <div className="absolute top-2 right-2">
                  <CompDesignerBtns 
                   moveComponent={moveComponent} 
                   deleteComponent={deleteComponent} 
                   i={i}
                  />
                  </div>
                  <HeroText preview={true} />
                </div>
              ) : component === "sectionText" ? (
                <div className="relative" key={i}>
                  <div className="absolute top-2 right-2">
                  <CompDesignerBtns 
                   moveComponent={moveComponent} 
                   deleteComponent={deleteComponent} 
                   i={i}
                  />
                  </div>
                  <SectionText preview={true} />
                </div>
              ) : component === "heroOverlay" ? (
                <div className="relative" key={i}>
                  <div className="absolute top-2 right-2">
                  <CompDesignerBtns 
                   moveComponent={moveComponent} 
                   deleteComponent={deleteComponent} 
                   i={i}
                  />
                  </div>{" "}
                  <HeroOverlay preview={true} />
                </div>
              ) : null
            )
          ) : (
            <div
              className={`w-full p-8 flex justify-center items-center flex-col ${
                draggingOver ? "bg-success" : ""
              }`}
              onDragOver={(e) => setDragOver(true)}
              onDragLeave={(e) => setDragOver(false)}
              onDrop={(e) => setDragOver(false)}
            >
              <h3 className="mb-5 text-2xl font-bold">
                Drag and drop components here to start building!
              </h3>
              <div
                className={`w-32 h-32 bg-base-200 rounded flex items-center justify-center opacity-70 hover:cursor-pointer `}
              >
                <FaPlus className="text-secondary w-14 h-14" />
              </div>
            </div>
          )}

          <Footer preview={true} />
        </div>
      </section>
      <section className="px-4 h-screen shadow-bs-custom-right bg-base-200 text-secondary border-l-2 border-black">
        <div className="navbar justify-center ">
          <div className="navbar-center">
            <ul className="menu menu-vertical">
              <li>
                <details>
                  <summary>General settings</summary>
                  <ul className="">
                    <li className="">Name</li>
                    <li>Template</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Components</summary>
                  <ul className="p-0">
                    <li
                      className={`rounded border-primary border-2 bg-success p-2.5 text-center font-bold hover:cursor-grab my-2}`}
                      draggable
                      onDragStart={(e) => handleComponentDrag(e, "heroText")}
                    >
                      Hero Text Component
                    </li>
                    <li
                      className={`rounded border-primary border-2 bg-success p-2.5 text-center font-bold hover:cursor-grab my-2}`}
                      draggable
                      onDragStart={(e) => handleComponentDrag(e, "sectionText")}
                    >
                      Section Text Component
                    </li>
                    <li
                      className={`rounded border-primary border-2 bg-success p-2.5 text-center font-bold hover:cursor-grab my-2}`}
                      draggable
                      onDragStart={(e) => handleComponentDrag(e, "heroOverlay")}
                    >
                      Hero Overlay Component
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
