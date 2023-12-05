"use client";
import Link from "next/link";

interface HeroText {
  preview?: boolean;
  contentPosition?: string;
  headerTitle?: string;
  titleContent?: string;
  buttonText?: string;
  textColor?: string;
  backgroundColor?: string;
}

export default function SectionText(props: HeroText) {
  const {
    preview,
    contentPosition,
    headerTitle,
    titleContent,
    textColor,
    backgroundColor,
  } = props;

  const ContentPosition = `
  ${contentPosition?.includes("left") ? "justify-start" : ""}
  ${contentPosition?.includes("center") ? "justify-center" : ""}
  ${contentPosition?.includes("right") ? "justify-end" : ""}
  ${contentPosition?.includes("top") ? "items-start" : ""}
  ${contentPosition?.includes("middle") ? "items-center" : ""}
  ${contentPosition?.includes("bottom") ? "items-end" : ""}
`;

  return (
    <>
      {preview ? (
        <div
          className={`hero py-16 px-8 ${
            backgroundColor ? backgroundColor : "bg-secondary"
          } p-8 ${ContentPosition ? ContentPosition : ""}`}
        >
          <div className={`hero-content text-center `}>
            <div
              className={`max-w-md ${textColor ? textColor : "text-primary"}`}
            >
              <h3 className="text-3xl font-bold">
                {headerTitle ? headerTitle : "Preview Title"}
              </h3>
              <p className="py-6 text-center">
                {titleContent
                  ? titleContent
                  : "Bacon ipsum dolor amet short loin chuck ground round capicola beef ribs meatloaf flank boudin sirloin andouille spare ribs jowl pork belly drumstick tail. Chislic biltong strip steak tri-tip, sirloin ground round venison short loin chicken tail."}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`hero py-16 px-8 ${
            backgroundColor ? backgroundColor : "bg-secondary"
          } p-8 ${ContentPosition ? ContentPosition : ""}`}
        >
          <div className={`hero-content text-center `}>
            <div
              className={`max-w-md ${textColor ? textColor : "text-primary"}`}
            >
              <h3 className="text-3xl font-bold">
                {headerTitle ? headerTitle : ""}
              </h3>

              <p className="py-6 text-center">
                {titleContent ? titleContent : ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
