// src/pages/GamePage.jsx
import React from "react";
import { FaTelegramPlane, FaDownload, FaPhoneAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

function GamePage() {
  const { gameName } = useParams(); // Assuming you're using a dynamic route for each game

  return (
    <div className="min-h-screen bg-gray-800 text-white p-4 flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-md text-sm mb-4">
        <p>
          Country: <span className="inline-block mr-2">🇮🇳</span>
        </p>
        <p className="text-green-400">Online Users: 14770</p>
      </div>

      {/* User Info */}
      <div className="w-full max-w-md text-left mb-4">
        <p className="text-sm">
          User 819****806 <span className="text-green-400">Win ₹16730</span>
        </p>
      </div>

      {/* Game Icon and Title */}
      <div className="flex flex-col items-center mb-4 size-22">
        <img
          src="/images/9.jpg"
          alt="91 Club"
          className="w-32 h-32 rounded-lg mb-2"
        />
        <h2 className="text-lg font-semibold">91club Hack ~ Wingo</h2>
      </div>

      {/* Server Status and Input Section */}
      <div className="w-full max-w-md p-4 bg-gray-700 rounded-lg text-left mb-4 ">
        <p>
          Server: <span className="text-green-400">Active</span>
        </p>
        <input
          type="text"
          placeholder="Period Number: enter..."
          className="mt-2 w-full p-2 rounded bg-gray-600 placeholder-gray-400 text-center"
        />
        <p className="mt-2">Result:</p>
      </div>

      {/* Start Button */}
      <button className="bg-blue-500 text-white font-bold text-lg py-2 px-6 rounded-full mb-4 w-60">
        Start
      </button>

      {/* Information Boxes */}
      <div className="flex space-x-4 w-full max-w-md mb-4">
        <div className="flex-1 p-2 h-52 bg-gray-700 rounded-lg text-center text-sm">
          <p>
            Create a new 91club account by clicking on 'Register' button. If you
            use this mod in your old account, then mod will not work.
          </p>
        </div>
        <div className="flex-1 p-2 bg-gray-700 rounded-lg text-center text-sm">
          <p>
            'Register' बटन पर क्लिक करके एक नया account बनाएं, यदि आप इस मॉड का
            उपयोग अपने पुराने account में करते हैं, तो मॉड काम नहीं करेगा।
          </p>
        </div>
      </div>

      {/* Register Button */}
      <button className="bg-blue-500 text-white font-bold text-lg py-2 px-6 rounded-full mb-4 w-[160px]">
        Register
      </button>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-2">
       <button className="flex items-center justify-center w-full p-3 bg-blue-600 rounded-full text-white text-center">
  <FaTelegramPlane className="mr-2"/> Join Telegram
</button>

        <button className="flex items-center justify-center w-full p-3 bg-green-500 rounded-full text-white">
          <FaDownload className="mr-2" /> Download Single Hack
        </button>
        <button className="flex items-center justify-center w-full p-3 bg-blue-600 rounded-full text-white">
          <FaPhoneAlt className="mr-2" /> Customer Care
        </button>
      </div>
    </div>
  );
}

export default GamePage;
