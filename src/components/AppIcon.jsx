// src/components/AppIcon.jsx
import React from "react";
import { Link } from "react-router-dom";

function AppIcon({ name, image, linkTo }) {
  return (
    <Link to={linkTo}>
      <div className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform">
        <div
          className="w-24 h-24 bg-cover bg-center rounded-lg gap-9 "
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <p className="mt-2 text-center">{name}</p>
      </div>
    </Link>
  );
}

export default AppIcon;
