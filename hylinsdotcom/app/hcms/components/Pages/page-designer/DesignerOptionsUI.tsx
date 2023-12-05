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
    <div className={`bg-neutral w-64 p-6 text-primary absolute right-0 rounded shadow-lg transform transition-transform duration-300 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
      <div>
        <h2 className="text-xl font-semibold mb-4">Designer Options</h2>
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
        <ul className="overflow-y-auto max-h-40">
          <details>
            <summary className="py-2">Components</summary>
            <li className="p-2">Component</li>
            <li className="p-2">Component</li>
            <li className="p-2">Component</li>
            <li className="p-2">Component</li>
            <li className="p-2">Component</li>
          </details>
        </ul>
      </div>

    </div>
          <button className={`absolute bg-success right-4 top-0 flex p-2 rounded-full text-center transform transition-transform duration-300 ${!menu ? '-translate-y-2' : 'translate-y-full'}`} onClick={() => toggleMenu(!menu)}>
            
          {!menu ? (
            <MdKeyboardDoubleArrowLeft className="text-xl text-secondary"/>
          ) : (
            <MdKeyboardDoubleArrowRight className="text-xl text-secondary" />
          )}
        </button>
        </>
    //     <section className="px-4 h-screen shadow-bs-custom-right bg-base-200 text-secondary border-l-2 border-black">
    //     <div className="navbar justify-center ">
    //       <div className="navbar-center">
    //         <ul className="menu menu-vertical">
    //           <li>
    //             <details>
    //               <summary>General settings</summary>
    //                 <li className="">Name</li>
    //                 <li>Template</li>
    //             </details>
    //           </li>
    //           <li>
    //             <details>
    //               <summary>Components</summary>
    //                 <li
    //                   className={`rounded border-primary border-2 bg-success p-2.5 text-center font-bold hover:cursor-grab my-2}`}
    //                   draggable
    //                   onDragStart={(e) => handleComponentDrag(e, "heroText")}
    //                 >
    //                   Hero Text Component
    //                 </li>
    //                 <li
    //                   className={`rounded border-primary border-2 bg-success p-2.5 text-center font-bold hover:cursor-grab my-2}`}
    //                   draggable
    //                   onDragStart={(e) => handleComponentDrag(e, "sectionText")}
    //                 >
    //                   Section Text Component
    //                 </li>
    //                 <li
    //                   className={`rounded border-primary border-2 bg-success p-2.5 text-center font-bold hover:cursor-grab my-2}`}
    //                   draggable
    //                   onDragStart={(e) => handleComponentDrag(e, "heroOverlay")}
    //                 >
    //                   Hero Overlay Component
    //                 </li>
    //             </details>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </section>
  );
}
