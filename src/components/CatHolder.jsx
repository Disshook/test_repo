import React from "react";

const CatHolder = (props) => {
  const img = props.img;
  const name = props.name;
  let description = props.description;
  if (description)
    description = description.substring(3, description.length - 4);
  return (
    <div className="snap-center snap-always border-2 rounded-lg shadow-lg bg-white ">
      <div className="flex w-[350px] h-[200px]  ">
        <img src={img} alt="" className=" w-32 h-48 object-cover " />
        <div className="flex flex-col w-full break-all px-4">
          <span className="text-center text-xl font-mono text-black break-all w-full">
            {name}
          </span>
          <span className="text-justify break-all w-full">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default CatHolder;
