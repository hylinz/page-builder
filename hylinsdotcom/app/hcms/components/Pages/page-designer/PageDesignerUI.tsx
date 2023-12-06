"use client";
import HeroText from "@/app/lib/templates/resources/common/HeroText";
import SectionText from "@/app/lib/templates/resources/common/SectionText";
import HeroOverlay from "@/app/lib/templates/resources/common/HeroOverlay";
import { FaPlus } from "react-icons/fa";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { useState } from "react";
import CompDesignerBtns from "./DesignerUI-component-buttons";
import DesignerOptionsUI from "./DesignerOptionsUI";
import ComponentSettings from "./ComponentSettings";

interface PageComponent {
  _name: string;
  _displayName: string;
  _settings?: any;
}

export default function PageDesignerUI() {
  // Main controll state
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);

  console.log(pageComponents);
  // Drag options
  const [draggingOver, setDragOver] = useState<boolean>(false);

  const handleComponentDrag = (e: React.DragEvent, component: string) => {
    e.dataTransfer.setData("component", component);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const componentType = JSON.parse(e.dataTransfer.getData("component"));
    setPageComponents([...pageComponents, componentType]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  //////////////// Component buttons ////////////////

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

  //////////////// Update Settings ////////////////
  const handleUpdateSettings = (
    settings: any,
    componentIndex: number
  ): void => {
    const updatedPageComponents = [...pageComponents];
    const updatedComponent = { ...updatedPageComponents[componentIndex] };
    updatedComponent._settings = settings;
    updatedPageComponents[componentIndex] = updatedComponent;
    setPageComponents(updatedPageComponents);
    console.log(updatedPageComponents);
  };

  //////////////// Get Settings ////////////////
  const getValueFromSettings = (component: PageComponent, name: string) => {
    const setting = component._settings.find(
      (setting: { name: string }) => setting.name === name
    );
    return setting ? setting.value : "";
  };

  return (
    <>
      <section className="w-full overflow-y-auto m-4 bg-primary custom-scrollbar rounded-md">
        <Header preview={true} />
        <div
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          className=" shadow flex-co w-full h-full flex-col"
        >
          {pageComponents && pageComponents.length > 0 ? (
            pageComponents.map((component: PageComponent, i: number) =>
              component._name === "heroText" ? (
                <>
                  <ComponentSettings
                    handleUpdateSettings={handleUpdateSettings}
                    key={i}
                    settings={component._settings}
                    componentIndex={i}
                  />
                  <div className="relative" key={i}>
                    <div className="absolute top-2 right-2">
                      <CompDesignerBtns
                        moveComponent={moveComponent}
                        deleteComponent={deleteComponent}
                        i={i}
                      />
                    </div>
                    <HeroText
                      preview={true}
                      contentPosition={getValueFromSettings(
                        component,
                        "contentPosition"
                      )}
                      headerTitle={getValueFromSettings(
                        component,
                        "headerTitle"
                      )}
                      titleContent={getValueFromSettings(
                        component,
                        "titleContent"
                      )}
                      buttonText={getValueFromSettings(component, "buttonText")}
                      link={getValueFromSettings(component, "link")}
                      textColor={getValueFromSettings(component, "textColor")}
                      buttonColor={getValueFromSettings(
                        component,
                        "buttonColor"
                      )}
                      backgroundColor={getValueFromSettings(
                        component,
                        "backgroundColor"
                      )}
                    />
                  </div>
                </>
              ) : component._name === "sectionText" ? (
                <>
                  <ComponentSettings
                    handleUpdateSettings={handleUpdateSettings}
                    key={i}
                    settings={component._settings}
                    componentIndex={i}
                  />

                  <div className="relative" key={i}>
                    <div className="absolute top-2 right-2">
                      <CompDesignerBtns
                        moveComponent={moveComponent}
                        deleteComponent={deleteComponent}
                        i={i}
                      />
                    </div>
                    <SectionText
                      preview={true}
                      contentPosition={getValueFromSettings(
                        component,
                        "contentPosition"
                      )}
                      headerTitle={getValueFromSettings(
                        component,
                        "headerTitle"
                      )}
                      titleContent={getValueFromSettings(
                        component,
                        "titleContent"
                      )}
                      textColor={getValueFromSettings(component, "textColor")}
                      backgroundColor={getValueFromSettings(
                        component,
                        "backgroundColor"
                      )}
                    />
                  </div>
                </>
              ) : component._name === "heroOverlay" ? (
                <>
                  <ComponentSettings
                    handleUpdateSettings={handleUpdateSettings}
                    key={i}
                    settings={component._settings}
                    componentIndex={i}
                  />
                  <div className="relative" key={i}>
                    <div className="absolute top-2 right-2">
                      <CompDesignerBtns
                        moveComponent={moveComponent}
                        deleteComponent={deleteComponent}
                        i={i}
                      />
                    </div>{" "}
                    <HeroOverlay
                      preview={true}
                      opacity={getValueFromSettings(component, "opacity")}
                      headerTitle={getValueFromSettings(
                        component,
                        "headerTitle"
                      )}
                      image={getValueFromSettings(component, "image")}
                      titleContent={getValueFromSettings(
                        component,
                        "titleContent"
                      )}
                      buttonText={getValueFromSettings(component, "buttonText")}
                      link={getValueFromSettings(component, "link")}
                      textColor={getValueFromSettings(component, "textColor")}
                      buttonColor={getValueFromSettings(
                        component,
                        "buttonColor"
                      )}
                      backgroundColor={getValueFromSettings(
                        component,
                        "backgroundColor"
                      )}
                    />
                  </div>
                </>
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
                Drag and drop components here to start building
              </h3>
              <div
                className={`w-32 h-32 bg-base-200 rounded flex items-center justify-center opacity-70  `}
              >
                <FaPlus className="text-secondary w-14 h-14" />
              </div>
            </div>
          )}

          <Footer preview={true} />
        </div>
      </section>
      <DesignerOptionsUI pageComponents={JSON.stringify(pageComponents)} handleComponentDrag={handleComponentDrag} />
    </>
  );
}
