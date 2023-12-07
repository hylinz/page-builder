"use client";
import Link from "next/link";

//HeroOverLaySettings.tsx controlls this on creation

interface HeroOverlayProps {
  preview?: boolean;
  opacity?: string;
  image?: string;
  headerTitle?: string;
  titleContent?: string;
  buttonText?: string;
  link?: string;
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
}

export default function HeroOverlay(props: HeroOverlayProps) {
  const {
    preview,
    opacity,
    image,
    headerTitle,
    titleContent,
    buttonText,
    link,
    textColor,
    buttonColor,
    backgroundColor,
  } = props;
  let opacityValue = '';
  if (opacity) {
    opacityValue = `bg-opacity-${opacity}`
  }


  return (
    <>
      {preview ? (
        <div
          className={`hero min-h-screen`}
          style={{
            backgroundImage: image || "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
            backgroundColor: backgroundColor || '',
          }}
        >
          <div
            className={`hero-overlay ${opacityValue ? opacityValue : ""}`}
          ></div>
          <div className={`hero-content text-center text-neutral-content ${textColor}`}>
            <div className="max-w-md">
              <h2 className="mb-5 text-5xl font-bold">
                {headerTitle ? headerTitle : "Preview Title"}
              </h2>
              <p className="mb-5">{titleContent ? titleContent : "Preview content goes here, this time there is no bacon!"}</p>
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
          className={`hero min-h-screen`}
          style={{
            backgroundImage: image
              ? image
              : "",
          }}
        >
          <div
            className={`hero-overlay ${opacity ? opacity : "100"} `}
          ></div>
          <div className={`hero-content text-center text-neutral-content`}>
            <div className="max-w-md">
              <h2 className="mb-5 text-5xl font-bold">
                {headerTitle ? headerTitle : ""}
              </h2>
              <p className="mb-5">{titleContent ? titleContent : ""}</p>
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
