const TitleCard = (props) => {
  const {title} = props
  return (
    <div className="title-card text-white text-xl font-semibold ">
      <p>{title}</p>
    </div>
  );
};

export default TitleCard;
