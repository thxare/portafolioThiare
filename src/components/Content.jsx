import React, { useState, useEffect } from "react";
import { Tecnologies } from "./Tecnologies";
import { DesignContent } from "./DesignContent";
import { DesignLines } from "./DesignLines";

export const Content = () => {
  return (
    <section
      className="w-full h-[1000px] relative flex justify-center"
      id="sobre-mi"
    >
      <div className="absolute top-64 w-8/12 z-50">
        <h2 className="inline-block font-barlow-semi text-5xl text-[#505050] border-b-2 border-[#D95276]">
          Sobre Mí
        </h2>
        <div className="sobreMiText flex flex-row align-middle items-center">
          <div className="sobreMiTexto w-full relative">
            <p className="w-5/6 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-lg px-7 py-4 font-barlow-semi-light relative z-10">
              <span className="font-barlow-semi-bold">
                Ingeniera informática
              </span>{" "}
              apasionada con el{" "}
              <span className="font-barlow-semi-bold">desarrollo web</span>.
              Estudié en Duoc UC y desde entonces he estado sumergida en el
              mundo del desarrollo{" "}
              <span className="font-barlow-semi-bold">frontend</span>,
              especialmente con{" "}
              <span className="font-barlow-semi-bold">React</span>. Me considero{" "}
              <span className="font-barlow-semi-bold">autodidacta</span> y
              siempre estoy dispuesta a aprender tecnologías nuevas.
            </p>
            <DesignContent />
          </div>
          <div className="relative">
            <img
              src="conloki.png"
              alt="Yo con mi perro Loki"
              className="relative rounded-full border-4 border-[#512F73] w-full z-50"
            />
            <DesignLines />
          </div>
        </div>
        <Tecnologies />
      </div>
    </section>
  );
};
