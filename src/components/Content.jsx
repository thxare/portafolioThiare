import React, { useState, useEffect } from "react";

export const Content = () => {
  return (
    <section className="w-full relative flex justify-center">
      <div className="absolute top-64 w-8/12 z-50">
        <h2 className="inline-block font-barlow-semi text-5xl text-[#505050] border-b-2 border-[#D95276]">
          Sobre Mí
        </h2>
        <div className="sobreMi flex flex-row align-middle items-center">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 220 220"
              fill="#512F73"
              className="absolute bottom-20 right-40 z-0"
            >
              <circle
                cx="110"
                cy="110"
                r="100"
                stroke="#512F73"
                strokeWidth="3"
              />
            </svg>
            <div className="absolute top-[70px] left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="50 -10 100 220"
                fill="none"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="100"
                  stroke="#D95276"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <img
              src="conloki.png"
              alt="Yo con mi perro Loki"
              className="relative rounded-full border-4 border-[#512F73] w-full z-50"
            />
            <div className="absolute top-[-80px] right-[-70px] z-0">
              <svg
                width="204"
                height="187"
                viewBox="0 0 204 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="201.024"
                  y1="2.21377"
                  x2="2.02442"
                  y2="184.214"
                  stroke="url(#paint0_linear_1042_79)"
                  stroke-width="6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1042_79"
                    x1="99.4998"
                    y1="91"
                    x2="199"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D95276" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
             <div className="absolute top-[-80px] right-[-150px] z-0">
              <svg
                width="204"
                height="187"
                viewBox="0 0 204 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="201.024"
                  y1="2.21377"
                  x2="2.02442"
                  y2="184.214"
                  stroke="url(#paint0_linear_1042_79)"
                  stroke-width="6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1042_79"
                    x1="99.4998"
                    y1="91"
                    x2="199"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D95276" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};
