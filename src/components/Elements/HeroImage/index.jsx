import ImageHero from "../../../assets/img/hero-image.svg";
import HeroTagline from "../../../assets/img/tagline-hero.svg";
const HeroImage = () => {
  return (
    <div className="hero-image flex flex-col items-center">
      <img src={ImageHero} alt="" />
      <img src={HeroTagline} alt="" />
    </div>
  );
};

export default HeroImage;
