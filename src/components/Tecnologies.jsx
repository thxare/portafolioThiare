import React from "react";
import { Tecnology } from "./Tecnology";

export const Tecnologies = () => {
  const listTecFront = ["HTML5", "CSS3", "Javascript", "ReactJS"];
  const listTecBack = ["NodeJS", "MySQL", "Express"];
  const listTecHerr = ["GIT", "Github", "Postman"];
  return (
    <div className="grid grid-cols-3 gap-4 self-start mt-40">
      <Tecnology
        imgSrc="./logoReact.png"
        imgAlt="logoFrontend"
        title="Frontend"
        tecnologies={listTecFront}
      />
      <Tecnology
        imgSrc="./logoBackend.png"
        imgAlt="logoBackend"
        title="Backend"
        tecnologies={listTecBack}
      />
      <Tecnology
        imgSrc="./herramientas.png"
        imgAlt="logo de herramientas"
        title="Herramientas"
        tecnologies={listTecHerr}
      />
    </div>
  );
};
