import Button from "../Button"
const Tagline = () => {
  return (
    <div className="tagline">
      <h1 className="text-4xl text-white font-bold ">
        Im a <span className="text-primary">web designer </span>and
        <br /> <span className="text-primary">front-end developer</span>
      </h1>
      <p className="mt-7 text-gray text-lg font-light">
        He crafts responsive websites where technologies <br /> meet creativity
      </p>
      <Button variant="mt-7 p-2">Contact me !!</Button>
    </div>
  );
};

export default Tagline;
