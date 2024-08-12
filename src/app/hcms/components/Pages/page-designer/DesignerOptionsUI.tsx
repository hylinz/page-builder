"use client";
import { createNewPage } from "@/app/actions/page-actions";
import componentList from "@/app/lib/component-list";
import { PageComponent } from "@/app/lib/types";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { toast } from "react-toastify";

interface DesignerOptionsUI {
  handleComponentDrag: (e: React.DragEvent, component: string) => void;
  setPageComponents: (pageComponent: PageComponent[] | []) => void;
  pageComponents: string;
}

export default function DesignerOptionsUI(props: DesignerOptionsUI) {
  const [menu, toggleMenu] = useState<boolean>(false);
  const components = componentList;
  const { handleComponentDrag, pageComponents } = props;

  //Form Validation
  


  // Form State:
  const [formState, formAction] = useFormState(createNewPage, {
    success: false,
    message: "",
    errors: [],
    fieldValues: {
      pageTitle: "",
      pageDesc: "",
      pageUrl: "",
      pageData: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formState && formState.success) {
      toast.success(formState && formState.message ? formState.message : "");
      formRef.current?.reset();
    }
  }, [formState]);

  /////

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        className={`bg-neutral w-64 p-6 text-primary absolute right-0 rounded-b-lg shadow-2xl transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <h2 className="text-xl font-semibold mb-4">Components</h2>
          <ul className="menu-vertical">
          <details open={formState?.errors.length > 0}>
              <summary className="py-2">General settings</summary>
              {formState?.errors
              ? formState.errors.map((field, i) => {
                  if (field.name === "pageTitle") {
                    return <p className="text-error-sm mt-2" key={i}>{field.message}</p>;
                  }
                  return null;
                })
              : null}
              <li className="py-2">
                <label className="my-2">Page title</label>
                <input name="pageTitle" type="text" placeholder="Type here" className="input w-full max-w-xs text-secondary" />
              </li>
              {formState?.errors
              ? formState.errors.map((field, i) => {
                  if (field.name === "pageDesc") {
                    return <p className="text-error-sm mt-2" key={i}>{field.message}</p>;
                  }
                  return null;
                })
              : null}
              <li className="py-2">
              <label className="my-2">Page description</label>
              <textarea name="pageDesc" placeholder="Type here" className="textarea textarea-bordered w-full max-w-xs text-secondary" />
              </li>
              {formState?.errors
              ? formState.errors.map((field, i) => {
                  if (field.name === "pageUrl") {
                    return <p className="text-error text-sm mt-2" key={i}>{field.message}</p>;
                  }
                  return null;
                })
              : null}
              <li className="py-2">
              <label className="my-2">Page Url</label>
              <input name="pageUrl" type="text" placeholder="my-url" className="input w-full max-w-xs text-secondary" />
              </li>
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
                      onDragStart={(e) =>
                        handleComponentDrag(e, JSON.stringify(component))
                      }
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
                      onDragStart={(e) =>
                        handleComponentDrag(e, JSON.stringify(component))
                      }
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
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(!menu);
          }}
        >
          {!menu ? (
            <MdKeyboardDoubleArrowLeft onClick={(e: Event) => e.preventDefault()} className="text-xl text-primary" />
          ) : (
            <MdKeyboardDoubleArrowRight onClick={(e: Event) => e.preventDefault()} className="text-xl text-primary" />
          )}
        </button>
        <input name="pageData" type="text" hidden readOnly value={pageComponents} />
        <button className="btn btn-success" type="submit">
          Finish
        </button>
      </form>
    </>
  );
}
