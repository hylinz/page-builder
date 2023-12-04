interface HeaderProps {
  repeat?: boolean;
  size: string;
  image: boolean;
  imageUrl?: string;
  bgColor?: string;
  headerTitle?: string;
  headerTitleColor?: string;
  headerTitleSize?: string;
  headerTitlePosition?: string;
}


export default async function PageHeader(props: HeaderProps) {
  const {
    repeat, //boolean optional
    size, // string
    image, // boolean
    imageUrl, // string optional
    bgColor, // string optional
    headerTitle, // string optional
    headerTitleColor, // string optional
    headerTitleSize, // string optional
    headerTitlePosition, // string optional
  } = props;

  console.log(props)

  const headerTitleStyle = `
  ${headerTitlePosition?.includes("left") ? "justify-start" : ""}
  ${headerTitlePosition?.includes("center") ? "justify-center" : ""}
  ${headerTitlePosition?.includes("right") ? "justify-end" : ""}
  ${headerTitlePosition?.includes("top") ? "items-start" : ""}
  ${headerTitlePosition?.includes("middle") ? "items-center" : ""}
  ${headerTitlePosition?.includes("bottom") ? "items-end" : ""}
`;
  const headerStyle = `${image && imageUrl ? `${imageUrl}` : bgColor ? bgColor : "bg-secondary"} bg-cover min-h-headerImage${size.toUpperCase()} ${repeat ? "bg-repeat" : "bg-no-repeat"} bg-center flex ${headerTitleStyle}`;

  return (
    <>
      <header className={headerStyle}>
        {headerTitle ? (
          <h2 className={`text-${headerTitleColor} text-${headerTitleSize}`}>{headerTitle}</h2>
        ) : null}
      </header>
    </>
  );
}
