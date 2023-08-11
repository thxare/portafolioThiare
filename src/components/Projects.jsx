import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const proyectos = [
    {
      title: "Feria Maipo Web",
      description: `Plataforma web conecta vendedores y compradores de frutas y verduras.
  Los vendedores pueden publicar sus productos y los compradores pueden
  explorar y adquirir una variedad de opciones deliciosas.`,
      img: "FeriaMaipoLogo.png",
      url: "https://github.com/thxare/feria-maipo-web",
    },
  ];
  return (
    <section
      className="w-full h-fit relative bg-[#F9F9F9] mt-40"
      id="proyectos"
    >
      <div className="absolute top-[-115px]">
        <svg
          width="1440"
          height="115"
          viewBox="0 0 1440 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1109.62 1.97923C1265.37 14.2906 1500 96.2473 1500 96.2473V114.984H486.382C483.248 115.005 480.095 115.005 476.923 114.984H-40.0001V33.5971C-40.0001 33.5971 272.951 113.591 476.923 114.984H486.382C730.688 113.311 863.045 -17.5101 1109.62 1.97923Z"
            fill="#F9F9F9"
          />
        </svg>
      </div>
      <div className="contenido flex flex-col">
        <div className="flex justify-center">
          <h2 className="inline-block font-barlow-semi text-5xl text-[#505050] border-b-2 border-[#D95276] mt-14">
            Mis Proyectos
          </h2>
        </div>

        <div className="proyectos grid justify-center md:grid-cols-3 w-full gap-16 my-14 grid-cols-1 sm:grid-cols-3 px-20">
          {proyectos.map((proyecto) => {
            return (
              <ProjectCard
                title={proyecto.title}
                description={proyecto.description}
                img={proyecto.img}
                url={proyecto.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
