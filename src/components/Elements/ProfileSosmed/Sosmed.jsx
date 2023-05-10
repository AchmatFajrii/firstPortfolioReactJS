import DiscordLogo from "../../../assets/img/Discord.svg"
import FigmaLogo from "../../../assets/img/Figma.svg"
import GithubLogo from "../../../assets/img/Github.svg"
const Sosmed = () => {
  return (
    <div className="sosmed text-white">
      <span>Media</span>
      <div className="list-sosmed flex">
        <img src={DiscordLogo} alt="" />
        <img src={FigmaLogo} alt="" />
        <img src={GithubLogo} alt="" />
      </div>
    </div>
  );
};

export default Sosmed;
