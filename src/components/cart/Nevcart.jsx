import { useStateValue } from "@/context/Index";
import React from "react";
import { FaHeart } from "react-icons/fa";
const Nevcart = ({ data, title }) => {
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div
      className="border-[2px] w-full p-3 mb-7 flex  gap-11 items-center relative"
      key={product.id}
    >
      <div className="w-[450px]  h-60  rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 cursor-pointer"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col gap-8">
          <p className="text-[24px] font-[500] max-w-96">{product.title}</p>
          <p className="text-[18px] font-[400] max-w-[80%]">{product.description}</p>
          <strong className="text-[26px] font-bold">{product.price} $</strong>
        </div>
        <div className="absolute top-[5px] left-[10px]">
          <button>
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto px-20 mt-20">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-1 gap-2">{items}</div>
    </div>
  );
};

export default Nevcart;
