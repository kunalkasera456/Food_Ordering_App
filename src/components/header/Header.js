import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
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
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <FaShoppingCart />
            <span>Cart</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
