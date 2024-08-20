import { useStateValue } from "@/context/Index";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Products = ({ data, title }) => {
  const navigate = useNavigate();
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div className="w-96 p-4 border mb-7 relative" key={product.id}>
      <div className="w-full h-64 bg-gray-200 rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 cursor-pointer"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[24px] font-[500] max-w-96">{product.title}</p>
        <p className="text-[18px] font-[400] max-w-96">{product.description}</p>
        <p className="text-[26px] font-bold">{product.price} $</p>
        <div className="absolute top-[5px] left-[10px]">
          <button>
            <FaHeart
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: product });
                toast.success("Mahsulot  qo'shildi", {position: "bottom-right"});
              }}
              className="text-2xl absolute hover:text-red-500 ml-[320px] mt-2"
            />
          </button>
        </div>
        <button
          className="bg-violet-700 py-2 text-[#fff] w-[200px] text-xl ml-[150px]"
          onClick={() => {
            navigate(`/Cart`);
            dispatch({ type: "CART", payload: product });
            toast.success("Cart qo'shildi", {position: "bottom-right"});
          }}
        >
          add cart
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto px-20">
      <h3 className="text-2xl font-bold mb-3">Products</h3>
      <div className="grid grid-cols-3">{items}</div>
    </div>
  );
};

export default Products;
