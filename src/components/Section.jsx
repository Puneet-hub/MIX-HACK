// src/components/Section.jsx
import React from "react";
import AppIcon from "./AppIcon";

function Section({ title, apps }) {
  return (
    <div className="w-full max-w-md mb-8">
      <h2 className="text-lg font-semibold text-center mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {apps.map((app, index) => (
          <AppIcon key={index} name={app.name} image={app.image} />
        ))}
      </div>
    </div>
  );
}

export default Section;
