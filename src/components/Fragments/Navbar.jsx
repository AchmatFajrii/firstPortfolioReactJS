import LogoPersonal from "../Elements/LogoPersonal";
import Menu from "../Elements/Menu"
const Navbar = () => {
  return (
    <nav className="flex justify-between mt-5">
      <LogoPersonal />
      <Menu />
    </nav>
  );
};

export default Navbar;
