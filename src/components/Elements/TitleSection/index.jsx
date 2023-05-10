const TitleSection = (props) => {
    const {children} = props;
  return (
    <div className="title text-white text-2xl font-semibold">
      <h2>
        <span className="text-primary">#</span>{children}
      </h2>
      <hr />
    </div>
  );
};

export default TitleSection;
