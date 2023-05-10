const DescriptionCard = (props) => {
  const {description} = props
  return (
    <div className="description-card text-gray text-base font-light">
      <p>{description}</p>
    </div>
  );
};

export default DescriptionCard;
