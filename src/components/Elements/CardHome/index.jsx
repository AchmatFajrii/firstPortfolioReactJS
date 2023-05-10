import CardBody from "./CardBody";
const CardItem = (props) => {
  const { image, text, title, description } = props;
  return (
    <div className="card-item">
      <CardBody
        image={image}
        text={text}
        title={title}
        description={description}
      ></CardBody>
    </div>
  );
};

export default CardItem;
