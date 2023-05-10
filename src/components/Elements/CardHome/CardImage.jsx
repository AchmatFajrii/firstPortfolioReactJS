const CardImage = (props) => {
  const { image } = props;
  return (
    <div className="card-image w-full">
      <img className="w-full" src={image} alt="" />
    </div>
  );
};

export default CardImage;
