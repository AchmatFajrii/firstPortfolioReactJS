import Navbar from "../../Fragments/Navbar"

const Header = () => {
  return (
    <header className="bg-background shadow-md fixed top-0 left-0 right-0 py-4">
      <div className="container mx-auto px-40">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
