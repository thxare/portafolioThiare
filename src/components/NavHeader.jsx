import React from "react";

export const NavHeader = () => {
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
    <nav className="relative text-white mt-24 mb-12 md:mt-12">
      <button className="block md:hidden border border-s border-[#512F73] rounded p-1">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H3.75C3.33579 18 3 17.6642 3 17.25Z"
            fill="#FFFFFF"
          />
        </svg>
      </button>

      <ul className="hidden md:flex md:flex-row gap-12 font-barlow-semi">
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
          <a
            className="hover:border-b-2 hover:border-[#D95276]"
            href="#contacto"
            onClick={scrollToSection}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
