import Link from "next/link";

interface HeroText {
  contentPosition?: string;
  headerTitle?: string;
  titleContent?: string;
  buttonText?: string;
  textColor?: string;
  backgroundColor?: string;
}

export default async function SectionText(props: HeroText) {
  const {
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
      <div
        className={`hero py-16 px-8 ${
          backgroundColor ? backgroundColor : "bg-secondary"
        } p-8 ${ContentPosition ? ContentPosition : ''}`}
      >
        <div className={`hero-content text-center `}>
          <div className={`max-w-md ${textColor ? textColor : "text-primary"}`}>
            {headerTitle ? (
              <h3 className="text-3xl font-bold">{headerTitle}</h3>
            ) : (
              ""
            )}
            <p className="py-6 text-center">
              {titleContent ? titleContent : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
