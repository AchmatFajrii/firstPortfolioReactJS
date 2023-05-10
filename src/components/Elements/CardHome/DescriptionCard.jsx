const DescriptionCard = (props) => {
    const {description} = props;
  return (
    <div className="description-card text-gray text-base font-light px-4 py-2">
      <p>{description}</p>
    </div>
  );
};

export default DescriptionCard;
