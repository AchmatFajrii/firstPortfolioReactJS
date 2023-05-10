import CardBody from "./CardBody";
const CardItem = (props) => {
    const {image, text, title, description} = props
  return (
    <div className="card-item w-full">
      <CardBody image={image} text={text} title={title} description={description} />
    </div>
  );
};

export default CardItem;
