import React from "react";

export const HeaderPortfolio = () => {
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const linkToSection = document.querySelector(targetId);

    if (linkToSection) {
      linkToSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <header className="w-full h-screen relative min-h-[700px] max-h-fit flex justify-center items-center">
        <div className=" w-8/12 content z-50">
          <nav className="relative text-white my-12">
            <ul className="flex flex-row gap-12 font-barlow-semi">
              <li>
                <a
                  className="hover:border-b-2 hover:border-[#D95276]"
                  href="#sobre-mi"
                  onClick={scrollToSection}
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-[#D95276]"
                  href="#proyectos"
                  onClick={scrollToSection}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a className="hover:border-b-2 hover:border-[#D95276]" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <section className="flex flex-row align-middle items-center mx-auto justify-between">
            <div className="animate-fade-right animate-once animate-duration-500 animate-ease-linear animate-normal">
              <img src="./principal.png" alt="imagen de Thiare sáez" />
            </div>
            <div className="mainInfo flex flex-col items-center animate-fade-left animate-once animate-duration-500 animate-ease-linear animate-normal">
              <div className="info flex flex-col items-start">
                <div className="text-2xl text-white font-barlow-semi-light ">
                  Hola 👋! Soy
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                  <h1 className="text-7xl text-[#D95276] font-barlow-semi">
                    Thiare Sáez
                  </h1>
                  <h2 className="text-2xl text-white font-barlow-semi-light tracking-[.3em]">
                    Frontend Developer
                  </h2>
                </div>
              </div>
              <div className="buttons w-full justify-between flex flex-row mt-6 items-center">
                <a
                  className=" text-2xl text-white px-6 py-3 bg-[#D95276] hover:bg-[#e8839e] rounded-md font-barlow-semi-light"
                  href="./curriculum-espaniol.pdf"
                  download
                >
                  Currículum
                </a>
                <button className="h-14 text-2xl text-white px-6 py-2 rounded-md border border-white bg-[#6B4294] hover:bg-[#8871a1] font-barlow-semi-light">
                  Contáctame
                </button>
              </div>
              <div className="contacto flex flex-row justify-center gap-6 mt-4">
                <a href="https://github.com/thxare" target="_blank">
                  <svg
                    height="40"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="40"
                    fill="#ffffff"
                    data-view-component="true"
                    class="octicon octicon-mark-github v-align-middle color-fg-default"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/thiare-s%C3%A1ez-echeverr%C3%ADa-9402151ba/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#ffffff"
                    class="mercado-match"
                    width="45"
                    height="45"
                    focusable="false"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="absolute w-full h-full bg-[#431273] z-0 top-0">
          <div className="w-full h-full relative">
            <div className="absolute top-[-180px] right-[160px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="400"
                viewBox="50 -10 100 220"
                fill="none"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="100"
                  stroke="#512F73"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div className="absolute top-[500px] right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="200"
                viewBox="10 -10 100 220"
                fill="none"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="97"
                  stroke="#512F73"
                  stroke-width="6"
                />
              </svg>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#431273"
              fill-opacity="1"
              d="M0,128L60,154.7C120,181,240,235,360,224C480,213,600,139,720,112C840,85,960,107,1080,133.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </header>
    </>
  );
};
