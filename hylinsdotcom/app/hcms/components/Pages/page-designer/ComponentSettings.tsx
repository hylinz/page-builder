interface ComponentSettings {
  settings: any;
  index: number;
}

const ComponentSettings = (props: ComponentSettings) => {
  const { settings, index } = props;

  console.log(props)
  return (
    <>
      <div className="">

      </div>
    </>
  );
};

export default ComponentSettings;
