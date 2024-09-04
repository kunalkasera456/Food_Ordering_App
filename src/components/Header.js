import React, { useState } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoging, setIsLogIn] = useState(false);
  const handleLogin = () => {
   isLoging? setIsLogIn(false):setIsLogIn(true)
  }
  return (
    <header className="flex justify-between items-center px-24 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="w-20">
        <img className="w-full" src={LOGO_URL} alt="logo" />
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-8 text-lg font-medium text-gray-700">
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <FaHome />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <TbHelpHexagonFilled />
            <span>Help</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <BiSolidOffer />
            <span>Offer</span>
          </li>
          <li onClick={handleLogin} className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <CgProfile />
            <span>{isLoging? "Sing up": "Login"}</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300" >
            <FaShoppingCart />
            <span>Cart</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
