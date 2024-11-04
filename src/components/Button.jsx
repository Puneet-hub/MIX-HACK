// src/components/Button.jsx
// src/components/Button.jsx
import React from "react";

function Button({ icon, text }) {
  return (
    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full space-x-2 transition-transform duration-300 hover:bg-blue-700 hover:scale-105">
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Button;
