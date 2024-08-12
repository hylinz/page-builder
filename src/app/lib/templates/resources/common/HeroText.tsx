"use client";
import Link from "next/link";

interface HeroText {
  preview?: boolean;
  contentPosition?: string;
  headerTitle?: string;
  titleContent?: string;
  buttonText?: string;
  link?: string;
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
}

export default function HeroText(props: HeroText) {
  const {
    contentPosition,
    preview,
    headerTitle,
    titleContent,
    buttonText,
    link,
    textColor,
    buttonColor,
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
          className={`hero flex-1 ${
            backgroundColor ? backgroundColor : "bg-secondary"
          } p-8 ${ContentPosition ? ContentPosition : ""}`}
        >
          <div className={`hero-content text-center `}>
            <div
              className={`max-w-md ${textColor ? textColor : "text-primary"}`}
            >
              <h2 className="text-5xl font-bold">
                {headerTitle ? headerTitle : "Preview Title"}
              </h2>
              <p className="py-6">
                {titleContent
                  ? titleContent
                  : "Bacon ipsum dolor amet short loin chuck ground round capicola beef ribs meatloaf flank boudin sirloin andouille spare ribs jowl pork belly drumstick tail. Chislic biltong strip steak tri-tip, sirloin ground round venison short loin chicken tail."}
              </p>
              <button
                className={`btn ${
                  buttonColor ? buttonColor : "btn-primary hover:base-200"
                }`}
                onClick={(e) => e.preventDefault()}
              >
                {buttonText ? buttonText : "Click"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`hero flex-1 ${
            backgroundColor ? backgroundColor : "bg-secondary"
          } p-8 ${ContentPosition ? ContentPosition : ""}`}
        >
          <div className={`hero-content text-center `}>
            <div className={`max-w-md ${textColor ? textColor : ""}`}>
              <h2 className="text-5xl font-bold">
                {headerTitle ? headerTitle : ""}
              </h2>
              <p className="py-6">{titleContent ? titleContent : ""}</p>
              <button
                className={`btn ${
                  buttonColor ? buttonColor : "btn-primary hover:base-200"
                }`}
              >
                <Link href={link ? link : "/"}>
                  {buttonText ? buttonText : ""}
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
