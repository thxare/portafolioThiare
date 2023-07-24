import { HeaderPortfolio } from "./HeaderPortfolio";
import { Content } from "./Content.jsx";
import { Projects } from "./Projects";

export const Portafolio = () => {
  return (
    <>
      <div className="Portafolio flex flex-col">
        <HeaderPortfolio />
        <Content />
        <Projects />
      </div>
    </>
  );
};
