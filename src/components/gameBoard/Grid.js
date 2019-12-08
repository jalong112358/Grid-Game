import React from "react";

export default function Grid() {
  return (
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M 43 0 L 0 0 0 43"
            fill="#262626"
            stroke="#434343"
            strokeWidth="2"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
