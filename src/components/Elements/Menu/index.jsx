import LinkPage from "./LinkPage"
const Menu = () => {
  return (
    <div className="menu flex gap-8 text-white text-lg">
      <LinkPage link="/">home</LinkPage>
      <LinkPage link="/portfolio">portfolio</LinkPage>
      <LinkPage link="/contact">contact</LinkPage>
    </div>
  );
};

export default Menu;
