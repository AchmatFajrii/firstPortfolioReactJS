import CardImage from "./CardImage";
import Technology from "./Technology";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";
import Button from "../Button";


const CardBody = (props) => {
    const {image, text, title, description} = props
  return (
    <div className={`card-body w-96 pb-2 border border-white`}>
      <CardImage image={image}></CardImage>
      <Technology text={text}></Technology>
      <TitleCard title={title}></TitleCard>
      <DescriptionCard description={description}></DescriptionCard>
      <Button variant="py-2 px-4 mx-4 my-2">Detail</Button>
    </div>
  );
};

export default CardBody;
