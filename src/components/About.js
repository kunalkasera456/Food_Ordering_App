import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-gray-100 py-12">
      {/* Profile Section */}
      <div className="flex justify-center mb-8">
        {show ? (
          <>
            <Link to="/about">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to="/profile">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>

      {/* About Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-8">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to <br />
            The world of <br />
            <span className="text-orange-500">Tasty & Fresh Food</span>
          </h1>
          <h4 className="text-lg text-gray-600">
            "Better you will feel if you eat a{" "}
            <span className="text-orange-500">FoodDelivery</span> healthy meal"
          </h4>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/photo-delicious-hamburger-isolated-white-background_125540-3378.jpg"
            alt="Food Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
