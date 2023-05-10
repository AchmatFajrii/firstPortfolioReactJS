const Technology = (props) => {
  const {text} = props
  return (
    <div className="technology text-gray text-base font-light border-b border-white">
      <p>{text}</p>
    </div>
  );
};

export default Technology;
