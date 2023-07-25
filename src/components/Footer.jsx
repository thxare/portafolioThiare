import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#431273] w-full h-[700px] flex flex-col justify-center align-middle items-center ">
      <form
        className="flex flex-col w-1/2 gap-y-14"
        onSubmit={(e) => {e.preventDefault()}}
      >
        <label className="text-[#D95276] flex flex-col font-barlow-semi">
          Tu nombre
          <input
            type="text"
            className=" border-b-2 border-[#D95276] bg-transparent focus:outline-none text-white text-xl"
          />
        </label>
        <label className="text-[#D95276] flex flex-col font-barlow-semi">
          Correo
          <input
            type="email"
            className=" border-b-2 border-[#D95276] bg-transparent focus:outline-none text-white text-xl"
          />
        </label>
        <label className="text-[#D95276] flex flex-col font-barlow-semi">
          Mensaje
          <input
            type="text"
            className=" border-b-2 border-[#D95276] bg-transparent focus:outline-none text-white text-xl"
          />
        </label>
        <button className="font-barlow-semi bg-[#D95276] text-white px-6 py-2 rounded-md hover:bg-[#e8839e]">
          Enviar
        </button>
      </form>
      <div></div>
    </footer>
  );
};
