// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Section from "./components/Section";
import Button from "./components/Button";
import AppIcon from "./components/AppIcon";
import GamePage from "./pages/GamePage"; // Import GamePage component
import { mainApps, rummyEastApps, aviatorApps } from "./appData";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
        <Routes>
          {/* Main App Page */}
          <Route
            path="/"
            element={
              <>
                {/* User Info */}
                <div className="w-full max-w-md text-center mb-4">
                  <p className="text-sm">
                <p className="text-green-400 mb-6 text-right">Online Users: 13047</p>
                    <div className="text-left">User 908****329
                    <span className="text-green-400 ">Win ₹19519</span></div>
                  </p>
                  <button className="mt-2 px-4 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-300">
                    Join Whatsapp
                  </button>
                  <p className="mt-2 mb-3">Colour Trading Wingo Hack's 🇮🇳</p>
                </div>

                {/* Online Users */}

                {/* Main App Grid for Mobile */}
                <div className="grid grid-cols-2 gap-x-0 gap-y-8 max-w-md mb-8">
                  {mainApps.map((app, index) => (
                    <AppIcon
                      key={index}
                      name={app.name}
                      image={app.image}
                      linkTo={`/game/${app.name}`}
                    />
                  ))}
                </div>

                {/* Rummy East Hacks Section */}
                <Section title="Rummy East Hacks" apps={rummyEastApps} />

                {/* Aviators Hack Section */}
                <Section title="Aviators Hack" apps={aviatorApps} />

                {/* Button Section - Vertical Stack */}
                <div className="flex flex-col space-y-4 mt-8 w-full max-w-xs">
                  <Button icon={<FaTelegramPlane />} text="Join Telegram" />
                  <Button icon={<FaWhatsapp />} text="Join WhatsApp" />
                  <Button icon={<FaPhoneAlt />} text="Customer Care" />
                </div>
              </>
            }
          />

          {/* Dynamic Game Page Route */}
          <Route path="/game/:gameName" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
