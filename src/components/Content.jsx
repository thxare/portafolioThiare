import React, { useState, useEffect } from "react";

export const Content = () => {
  const [state, setState] = useState("Hey");

  return (
    <div className="w-full flex flex-row justify-between mt-10 space-x-10 px-10">
      <div className="w-1/2">
        <img src="./fondo.jpg" className="w-full" />
      </div>
      <div className="w-1/2">
        <h1 className="font-bold">{state}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repellendus labore aspernatur consequatur minima. Possimus, est
          praesentium perferendis eum voluptatum saepe? Expedita voluptates
          excepturi laboriosam, iure quae blanditiis illo voluptatibus!
        </p>
      </div>
      <div>
        <button
          onClick={() => setState("Hola")}
          className="bg-cyan-800 px-4 py-2 hover:bg-cyan-600 text-white"
        >
          cambiar
        </button>
      </div>
    </div>
  );
};
