"use client";
import componentList from "@/app/lib/component-list";
import { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface DesignerOptionsUI {
  handleComponentDrag: (e: React.DragEvent, component: string) => void;
}

export default function DesignerOptionsUI(props: DesignerOptionsUI) {
  const [menu, toggleMenu] = useState<boolean>(false);

  const components = componentList;
  const { handleComponentDrag } = props;
  return (
    <>
      <div
        className={`bg-neutral w-64 p-6 text-primary absolute right-0 rounded-b-lg shadow-2xl transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <h2 className="text-xl font-semibold mb-4">Components</h2>
          <ul className="menu-vertical">
            <details>
              <summary className="py-2">General settings</summary>
              <li className="py-2">Color</li>
              <li className="py-2">Font</li>
              <li className="py-2">Size</li>
            </details>
          </ul>
        </div>
        <div>
          <ul className="overflow-y-auto max-h-40 component-scrollbar">
            <details>
              <summary className="py-2">Headers</summary>
              {components && components?.headers
                ? components.headers.map((component, i) => (
                    <li
                      key={i}
                      draggable
                      onDragStart={(e) => handleComponentDrag(e, JSON.stringify(component))}
                      className="py-2 border-2 my-2 text-center border-primary"
                    >
                      {component._displayName}
                    </li>
                  ))
                : ""}
            </details>
          </ul>
          <ul className="overflow-y-auto max-h-40 component-scrollbar">
            <details>
              <summary className="py-2">Content</summary>
              {components && components?.content
                ? components.content.map((component, i) => (
                    <li
                      key={i}
                      draggable
                      onDragStart={(e) => handleComponentDrag(e, JSON.stringify(component))}
                      className="py-2 border-2 my-2 text-center border-primary"
                    >
                      {component._displayName}
                    </li>
                  ))
                : ""}
            </details>
          </ul>
        </div>
        <button
          className={`absolute bg-neutral -left-20 top-1 flex p-2 shadow-xl rounded-full text-center transform transition-transform duration-300 ${
            menu ? "translate-x-10" : "translate-x-full"
          }`}
          onClick={() => toggleMenu(!menu)}
        >
          {!menu ? (
            <MdKeyboardDoubleArrowLeft className="text-xl text-primary" />
          ) : (
            <MdKeyboardDoubleArrowRight className="text-xl text-primary" />
          )}
        </button>
      </div>
    </>
  );
}
