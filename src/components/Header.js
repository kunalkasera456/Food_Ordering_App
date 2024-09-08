import React, {useState } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoging, setIsLogIn] = useState(false);
  // const { loggedIn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnlineStatus(); // Get the online status

  const handleLogin = () => {
    setIsLogIn(!isLoging);
  };

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
            <Link to="/">
              <FaHome />
            </Link>
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <Link to="/help">
              <TbHelpHexagonFilled />
            </Link>
            <Link to="/help">Help</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <Link to="/offer">
              <BiSolidOffer />
            </Link>
            <Link to="/offer">Offer</Link>
          </li>
          <li
            onClick={handleLogin}
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300"
          >
            <CgProfile />
            <span>{isLoging ? "Sign up" : "Login"}</span>
            {/* <span>{loggedIn}</span> */}
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition duration-300">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <Link to="/cart">Cart ({cartItems.length})</Link>
            <div
              className={`ml-2 w-4 h-4 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
              title={isOnline ? "Online" : "Offline"}
            ></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
