import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { helpTopics } from "../utils/mokedata";

const Help = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (index) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">How can we help you?</h1>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-md">
            <span className="px-3 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search for help topics..."
              className="flex-grow py-2 px-4 text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Help Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpTopics.map((topic, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2
              className="font-semibold text-lg cursor-pointer"
              onClick={() => toggleTopic(index)}
            >
              {topic.title}
            </h2>
            {expandedTopic === index && (
              <ul className="mt-2">
                {topic.faqs.map((faq, i) => (
                  <li key={i} className="text-sm text-gray-700 py-1">
                    {faq}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Contact Us Section */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold">Need more help?</h2>
        <p className="text-gray-600 mt-2">
          If you have a specific query or need further assistance, feel free to contact{" "}
          <a
            href="mailto:kunalkasera456@gmail.com"
            className="text-blue-500 underline"
          >
            kunalkasera456@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Help;
