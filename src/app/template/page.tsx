import HeroFigure from "../lib/templates/resources/common/HeroFigure";
import HeroOverlay from "../lib/templates/resources/common/HeroOverlay";
import HeroText from "../lib/templates/resources/common/HeroText";
import SectionText from "../lib/templates/resources/common/SectionText";

export default async function Page() {
  return (
    <>
      <HeroOverlay 
        opacity='20'
        image='url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'
        headerTitle='My Site'
        titleContent='Lots of cool stuff can be found here, and you can press teh bnutton betllow to learn more, spelling is not a thing you will learn here.'
        buttonText='Click me bitch'
        link="/test"
      />
      <HeroText
      contentPosition="middle-center"
      headerTitle="This is my Title"
      titleContent="You can put whatever you want here and it shall be shown!"
      buttonText="Britney bitch"
      link="/"
      textColor="text-secondary"
      buttonColor="btn-secondary"
      backgroundColor="bg-primary"
      />
    <HeroFigure 
        image="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
        imageHeight={400}
        imageWidth={200}
        altText="Picture of spiderman"
        reverse={true}
        headerTitle="Spunker-Man!"
        titleContent="You can not get webbed by spunk man, he's got the best web in the city"
        buttonText="Click here"
        link="/static"
        textColor="text-primary"
        buttonColor="btn-primary"
        backgroundColor="bg-secondary"
    />
    <SectionText 
        contentPosition="left-middle"
        headerTitle="Here is a bunch of text"
        titleContent="Here is a bunch of other stuff which can be super interesting"
        textColor="text-secondary"
        backgroundColor="bg-primary"
    />
    </>
  );
}


//bg-[url('/header-placeholder.jpg')] bg-cover min-h-headerImageSmall bg-no-repeat bg-center
//bg-[url('/header-placeholder.jpg')] bg-cover min-h-headerImageMedium bg-no-repeat bg-center