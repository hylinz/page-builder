import Link from "next/link";

interface HeroText {
  contentPosition?: string;
  headerTitle?: string;
  titleContent?: string;
  buttonText?: string;
  link?: string;
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
}

export default async function HeroText(props: HeroText) {
  const {
    contentPosition,
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
      <div className={`hero min-h-screen ${backgroundColor ? backgroundColor : 'bg-secondary'} p-8 ${ContentPosition ? ContentPosition : ''}`}>
        <div className={`hero-content text-center `}>
          <div className={`max-w-md ${textColor ? textColor : 'text-primary'}`}>
            <h2 className="text-5xl font-bold">
              {headerTitle ? headerTitle : ""}
            </h2>
            <p className="py-6">{titleContent ? titleContent : ""}</p>
            <button className={`btn ${buttonColor ? buttonColor : 'btn-primary'}`}>
              <Link href={link ? link : "/"}>
                {buttonText ? buttonText : ""}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
