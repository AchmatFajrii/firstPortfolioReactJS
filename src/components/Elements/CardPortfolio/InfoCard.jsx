import Technology from "./Technology";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";
import Button from "../Button"
const InfoCard = (props) => {
    const {text, title, description} = props
  return (
    <div className="description-card flex flex-col justify-between w-full text-gray text-base font-light p-2">
      <Technology text={text} />
      <TitleCard title={title} />
      <DescriptionCard description={description} />
      <div className="button self-end">
        <Button variant="px-4 py-2">Link</Button>
      </div>
    </div>
  );
};

export default InfoCard;
