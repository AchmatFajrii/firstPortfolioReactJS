import DiscordLogo from "../../../assets/img/Discord.svg"
import EmailLogo from "../../../assets/img/Email.svg"

const DescriptionMe = () => {
  return (
    <div className="desc-me mt-5 flex justify-between text-gray">
      <p className="flex-1">
        I’m interested in freelance opportunities. However, if you have other
        request or question, don’t hesitate to contact me
      </p>
      <div className="support-message flex">
        <div className="support border border-gray p-2">
          <p className="text-white">Support me here</p>
          <p>4149500120690030</p>
        </div>
        <div className="message border border-gray p-2">
          <p className="text-white">Message me here</p>
          <div className="sosmed-message">
            <div className="discord flex">
              <img src={DiscordLogo} alt="" />
              <span>Fajri#1234</span>
            </div>
            <div className="email flex">
              <img src={EmailLogo} alt="" />
              <span>fajri@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionMe;
