import { Link } from "react-router-dom";

const LinkPage = (props) => {
  const { link, children } = props;
  return (
    <Link to={link}>
      <span className="text-primary">#</span>
      {children}
    </Link>
  );
};

export default LinkPage;
