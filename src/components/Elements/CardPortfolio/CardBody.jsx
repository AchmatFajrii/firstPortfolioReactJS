import CardImage from "./CardImage";
import InfoCard from "./InfoCard";
const CardBody = (props) => {
    const {image, text, title, description} = props
  return (
    <div className="card-body flex border border-white">
      <CardImage image={image} />
      <InfoCard text={text} title={title} description={description} />
    </div>
  );
};

export default CardBody;
