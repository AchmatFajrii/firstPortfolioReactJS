import Tagline from "../Elements/Tagline";
import HeroImage from "../Elements/HeroImage";
const Hero = () => {
  return (
    <section className="hero flex mt-24 justify-between items-center">
      <Tagline />
      <HeroImage />
    </section>
  );
};

export default Hero;
