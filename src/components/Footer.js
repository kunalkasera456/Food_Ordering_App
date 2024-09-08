import React from "react";
import { FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center flex flex-col items-center space-y-6">
        {/* Social and Info Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Created By Section */}
          <div className="text-sm flex items-center space-x-2">
            <span>Created by</span>
            <FaHeart className="text-red-500" />
            <a
              href="https://www.linkedin.com/in/kunalkasera456/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-500 transition duration-300"
              title="Kunal Kasera's LinkedIn Profile"
            >
              <span className="underline font-bold">Kunal Kasera</span>
            </a>
          </div>

          {/* GitHub Repo Section */}
          <div className="text-sm flex items-center space-x-2">
            {/* <FaCopyright />
            <span>{year}</span> */}
            <a
              href="https://github.com/kunalkasera456/Food_Ordering_App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-500 transition duration-300"
              title="Food Ordering GitHub Repository"
            >
              <strong className="underline font-bold text-lg">
                Food<span className="text-orange-500">Delivery</span>
              </strong>
            </a>
          </div>

          {/* About Link */}
          <div className="text-sm">
            <Link
              to="/about"
              className="text-orange-400 hover:text-orange-500 transition duration-300 font-bold text-lg"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="w-full h-px bg-gray-700"></div>

        {/* Footer Links or Additional Info */}
        <div className="text-xs text-gray-400">
          <p className="mb-2">
            Follow us on{" "}
            <a
              href="https://github.com/kunalkasera456/"
              className="text-orange-400 hover:text-orange-500 underline transition duration-300"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/kunalkasera456/"
              className="text-orange-400 hover:text-orange-500 underline transition duration-300"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>Copyright © {year} Food Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
