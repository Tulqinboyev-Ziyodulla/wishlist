import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-200 h-20 text-xl">
      <div className="h-full flex gap-8 items-center container mx-auto px-20">
        <NavLink className="text-2xl flex-1" to={"/"}>
          Logoo
        </NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishlist"}>Wishlist ❤️</NavLink>
        <NavLink to={"/Cart"}>Cart</NavLink>
      </div>
    </header>
  );
};

export default Header;
