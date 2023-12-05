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

  return (
    <>
      {preview ? (
        <div
          className={`hero min-h-screen`}
          style={{
            backgroundImage: image
              ? image
              : "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div
            className={`hero-overlay bg-opacity-${opacity ? opacity : "100"} `}
          ></div>
          <div className={`hero-content text-center text-neutral-content`}>
            <div className="max-w-md">
              <h2 className="mb-5 text-5xl font-bold">
                {headerTitle ? headerTitle : "Preview Title"}
              </h2>
              <p className="mb-5">{titleContent ? titleContent : "Preview content goes here, this time there is no bacon!"}</p>
              <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>
                  {buttonText ? buttonText : "Learn more"}
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
            className={`hero-overlay bg-opacity-${opacity ? opacity : "100"} `}
          ></div>
          <div className={`hero-content text-center text-neutral-content`}>
            <div className="max-w-md">
              <h2 className="mb-5 text-5xl font-bold">
                {headerTitle ? headerTitle : ""}
              </h2>
              <p className="mb-5">{titleContent ? titleContent : ""}</p>
              <button className="btn btn-primary">
                <Link href={link ? link : ""}>
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
