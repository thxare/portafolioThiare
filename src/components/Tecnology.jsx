import React from "react";

export const Tecnology = ({ imgSrc, imgAlt, title, tecnologies }) => {
  return (
    <div className="flex flex-col items-center row-span-1">
      <div className="imagen">
        <img src={imgSrc} alt={imgAlt} height={"100"}/>
      </div>
      <h3 className="font-barlow-semi text-[35px]">{title}</h3>
      <div className="tags w-full flex flex-row flex-wrap gap-2">
        {tecnologies.map((tec) => {
          return (
            <div className=" text-[rgb(217,82,118)] border-2 rounded-md border-[#D95276] py-1 px-4">
              {tec}
            </div>
          );
        })}
      </div>
    </div>
  );
};
