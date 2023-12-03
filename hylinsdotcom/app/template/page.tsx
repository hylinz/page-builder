import PageHeader from "../lib/templates/resources/common/PageHeader";

export default async function Page() {
  return (
    <>
      <PageHeader
        size="xl" // string (required) - Specify the size of the header image. Options: 's', 'm', 'l', 'xl'
        image={true} // boolean (required) - Set to true if you want to display an image in the header
        imageUrl={`bg-[url('/header-placeholder.jpg')]`} // string (optional) - URL of the header image
        bgColor="#ffffff" // string (optional) - Background color of the header if no image is provided
        headerTitle="My Header Title" // string (optional) - Title to be displayed in the header
        headerTitleColor="primary" // string (optional) - Text color of the header title
        headerTitleSize="text-2xl" // string (optional) - Font size of the header title
        headerTitlePosition="center-bottom" // string (optional) - Position of the header title. Options: 'top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'
      />

      <section>hello</section>
    </>
  );
}


//bg-[url('/header-placeholder.jpg')] bg-cover min-h-headerImageSmall bg-no-repeat bg-center
//bg-[url('/header-placeholder.jpg')] bg-cover min-h-headerImageMedium bg-no-repeat bg-center