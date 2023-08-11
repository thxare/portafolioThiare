export const ProjectCard = ({ title, description, img, url }) => {
  return (
    <a
      className="proyecto w-full border-[#D95276] border-2 rounded-md grid grid-rows-2 hover:shadow-2xl mx-auto"
      href={url}
      target="_blank"
    >
      <div className=" w-full">
        <img src={img} className="object-cover bg-gray-100"/>
      </div>
      <div className="py-2 px-4">
        <h3 className="text-[rgb(217,82,118)] font-barlow-semi text-xl my-2">{title}</h3>
        <p className="font-barlow-semi-light text-lg">{description}</p>
      </div>
    </a>
  );
};
