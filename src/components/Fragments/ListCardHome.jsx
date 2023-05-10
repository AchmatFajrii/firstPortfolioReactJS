import { useState } from "react";
import Card from "../Elements/CardHome";
import ImageCard1 from "../../assets/img/portfolio-img1.svg";
import ImageCard2 from "../../assets/img/portfolio-img2.svg";
import ImageCard3 from "../../assets/img/portfolio-img3.svg";
import ImageCard4 from "../../assets/img/portfolio-img4.svg";
import ImageCard5 from "../../assets/img/portfolio-img5.svg";

const ListCardHome = () => {
  const data = [
    {
      image: ImageCard1,
      text: "HTML CSS Python Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
    },
    {
      image: ImageCard2,
      text: "CSS Express NodeJS",
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
    },
    {
      image: ImageCard3,
      text: "React Express DiscordJS NodeJS",
      title: "ProtectX",
      description: "Discord anti-crash bot",
    },
    {
      image: ImageCard4,
      text: "HTML CSS JS",
      title: "Kotik Bot",
      description: "Multi-functional discord bot",
    },
    {
      image: ImageCard5,
      text: "HTML CSS JS ReactJS",
      title: "Fajri Portfolio",
      description: "You’re using it rn",
    },
  ];

  const [max, setMax] = useState(3);
  return (
    <>
      <div className="list-card flex flex-wrap justify-center gap-5 mt-10">
        {data.splice(0, max).map(({ image, text, title, description }, i) => (
          <Card
            key={i}
            image={image}
            text={text}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div>
        <button
          style={{ display: max > 3 ? "none" : "block" }}
          onClick={() => setMax(max + data.length)}
          className="mt-10 mx-auto block bg-primary text-black p-2"
        >
          View All
        </button>
        <button
          style={{ display: max > 3 ? "block" : "none" }}
          onClick={() => setMax(3)}
          className="mt-10 mx-auto block bg-primary text-black p-2"
        >
          Show Less
        </button>
      </div>
    </>
  );
};

export default ListCardHome;
{
  /* <Card
image={ImageCard1}
text="HTML CSS Python Flask"
title="ChertNodes"
description="Minecraft servers hosting"
/>
<Card
image={ImageCard2}
text="React Express NodeJS HTML CSS Python"
title="ProtectX"
description="Discord anti-crash bot"
/>
<Card
image={ImageCard3}
text="CSS Express NodeJS"
title="Kahoot Answers Viewer"
description="Get answers to your kahoot quiz"
/> */
}
