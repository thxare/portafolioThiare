import { HeaderPortfolio } from "./HeaderPortfolio";
import { Content } from "./Content.jsx";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

export const Portafolio = () => {
  return (
    <>
      <div className="Portafolio flex flex-col w-full">
        <HeaderPortfolio />
        <Content />
        <Projects />
        <Footer />
      </div>
    </>
  );
};
