import { useStateValue } from "@/context/Index";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Products = ({ data, title }) => {
  const navigate = useNavigate();
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div className="w-96 p-6 border border-gray-300 rounded-xl mb-7 relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out" key={product.id}>
      <div className="w-full h-64 bg-gray-200 rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 hover:scale-105 cursor-pointer"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col gap-5 mt-4">
        <p className="text-[24px] font-semibold text-gray-800 truncate">{product.title}</p>
        <p className="text-[18px] font-medium text-gray-600 line-clamp-2">{product.description}</p>
        <p className="text-[26px] font-bold text-gray-900">{product.price} $</p>

        <div className="absolute top-[5px] left-[10px]">
          <button>
            <FaHeart
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: product });
                toast.success("Istaklar roʻyxati qo'shildi", { position: "bottom-right" });
              }}
              className="text-2xl absolute hover:text-red-500 ml-[315px] mt-4"
            />
          </button>
        </div>

        <button
          className="bg-gradient-to-r from-teal-500 to-blue-500 py-2 px-6 text-white w-full text-lg rounded-full shadow-md hover:from-teal-600 hover:to-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
          onClick={() => {
            navigate(`/Cart`);
            dispatch({ type: "CART", payload: product });
            toast.success("Cart qo'shildi", { position: "bottom-right" });
          }}
        >
          Add to Cart
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
