import CardPortfolio from "../Elements/CardPortfolio";

import ImageCard1 from "../../assets/img/portfolio-img1.svg";
import ImageCard2 from "../../assets/img/portfolio-img2.svg";
import ImageCard3 from "../../assets/img/portfolio-img3.svg";
import ImageCard4 from "../../assets/img/portfolio-img4.svg";
import ImageCard5 from "../../assets/img/portfolio-img5.svg";
const ListCardPortfolio = () => {
  return (
    <div className="list-card flex flex-wrap gap-5 mt-10">
      <CardPortfolio
        image={ImageCard1}
        text="HTML CSS Python Flask"
        title="ChertNodes"
        description="Minecraft servers hosting"
      />
      <CardPortfolio
        image={ImageCard2}
        text="React Express NodeJS HTML CSS Python"
        title="Kahoot Answers Viewer"
        description="Get answers to your kahoot quiz"
      />
      <CardPortfolio
        image={ImageCard3}
        text="CSS Express NodeJS"
        title="ProtectX"
        description="Discord anti-crash bot"
      />
      <CardPortfolio
        image={ImageCard4}
        text="HTML CSS JS"
        title="Kotik Bot"
        description="Multi-functional discord bot"
      />
      <CardPortfolio
        image={ImageCard5}
        text="Vue TS Less"
        title="Portfolio"
        description="You’re using it rn"
      />
    </div>
  );
};

export default ListCardPortfolio;
