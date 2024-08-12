import Link from "next/link";
import Image from "next/image";

interface HeroFigure {
  image?: string;
  imageHeight: number,
  imageWidth: number,
  altText: string;
  reverse: boolean;
  headerTitle?: string;
  titleContent?: string;
  buttonText?: string;
  link?: string;
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
}

export default async function HeroFigure(props: HeroFigure) {
  const {
    image,
    imageHeight,
    imageWidth,
    altText,
    reverse,
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
      {reverse ? (
        <div className={`hero min-h-screen ${backgroundColor ? backgroundColor : 'secondary'}`}>
          <div className="hero-content flex-col lg:flex-row ">
            <Image
              height={imageHeight ? imageHeight : 0}
              width={imageWidth ? imageWidth : 0}
              alt={altText ? altText : 'An image'}
              src={image ? image : ''}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className={`${textColor ? textColor : 'text-primary'}`}>
              <h1 className="text-5xl font-bold">{headerTitle ? headerTitle : ''}</h1>
              <p className="py-6">
                {titleContent ? titleContent : ''}
              </p>
              <button className={`btn ${buttonColor ? buttonColor : "btn-primary"}`}>
                <Link href={link ? link : '/'}>
                {buttonText ? buttonText : ''}
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`hero min-h-screen ${backgroundColor ? backgroundColor : 'secondary'}`}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              height={imageHeight ? imageHeight : 0}
              width={imageWidth ? imageWidth : 0}
              alt={altText ? altText : 'An image'}
              src={image ? image : ''}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className={`${textColor ? textColor : 'text-primary'}`}>
              <h1 className="text-5xl font-bold">{headerTitle ? headerTitle : ''}</h1>
              <p className="py-6">
                {titleContent ? titleContent : ''}
              </p>
              <button className={`btn ${buttonColor ? buttonColor : "btn-primary"}`}>
                <Link href={link ? link : '/'}>
                {buttonText ? buttonText : ''}
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
