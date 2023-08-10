export const Projects = () => {
  return (
    <section className="w-full h-[800px] relative bg-[#F9F9F9] mt-40" id="proyectos">
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
      <div className="contenido flex flex-col px-52">
        <div className="flex justify-center">
          <h2 className="inline-block font-barlow-semi text-5xl text-[#505050] border-b-2 border-[#D95276] mt-14">
            Mis Proyectos
          </h2>
        </div>

        <div className="proyectos flex flex-row w-full gap-x-16 mt-14">
          <a
            className="proyecto w-1/3 border-[#D95276] border-2 rounded-md"
            href="https://github.com/thxare/feria-maipo-web"
          >
            <div className="w-full h-56">
              <img src="FeriaMaipoLogo.png" />
            </div>
            <div className="w-full p-4">
              <h3 className="text-[rgb(217,82,118)]">Feria Maipo Web</h3>
              <p>
                Plataforma web conecta vendedores y compradores de frutas y
                verduras. Los vendedores pueden publicar sus productos y
                los compradores pueden explorar y adquirir una variedad de
                opciones deliciosas.
              </p>
            </div>
          </a>

          <div className="proyecto w-1/3 border-[#D95276] border-2 rounded-md ">
            <div className="w-full h-56 bg-slate-800"></div>
            <div className="w-full p-4">
              <h3 className="text-[rgb(217,82,118)]">Feria maipo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti laboriosam quod suscipit.
              </p>
            </div>
          </div>

          <div className="proyecto w-1/3 border-[#D95276] border-2 rounded-md ">
            <div className="w-full h-56 bg-slate-800"></div>
            <div className="w-full p-4">
              <h3 className="text-[rgb(217,82,118)]">Feria maipo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti laboriosam quod suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
