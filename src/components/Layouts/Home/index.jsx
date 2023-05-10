import Hero from "../../Fragments/Hero";
import Quote from "../../Fragments/Quote";
import PortfolioHome from "../../Fragments/PortfolioHome";
const Main = () => {
  return (
    <main>
      <div className="container mx-auto px-40">
        <Hero />
        <Quote />
        <PortfolioHome />
      </div>
    </main>
  );
};

export default Main;
