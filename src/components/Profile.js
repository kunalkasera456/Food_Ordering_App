// Profile.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container mx-auto flex flex-col items-center bg-white shadow-lg rounded-lg p-8 mb-8">
      {/* Profile Image */}
      <img
        className="w-60 h-60 object-cover rounded-full mb-4 shadow-md"
        src="https://avatars.githubusercontent.com/u/105341082?s=400&u=6961465c8b893305279987d3ecd4a6599f548dc4&v=4" // Replace with your actual image URL
        alt="Profile"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Kunal Kasera</h2>

      {/* Social Links */}
      <div className="flex space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/kunalkasera456/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/kunalkasera456"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition duration-300"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="mailto:kunalkasera456@gmail.com"
          className="text-red-500 hover:text-red-600 transition duration-300"
        >
          <FaEnvelope size={32} />
        </a>
      </div>

      <p className="text-gray-600">
        Software Developer | Web Application Enthusiast
      </p>
    </div>
  );
};

export default Profile;
