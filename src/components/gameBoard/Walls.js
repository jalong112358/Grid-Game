import React from "react";

function Walls(props) {
  return (
    <div>
      {props.walls &&
        props.walls.map(wall => (
          <svg
            style={{
              position: "absolute",
              left: (wall.x - 1) * 50,
              top: (wall.y - 1) * 50
            }}
            d="M 43 0 L 0 0 0 43"
            fill="#262626"
            stroke="#434343"
            strokeWidth="2"
          >
            <rect width="43" height="43" fill="#7E7E7E" />
          </svg>
        ))}
    </div>
  );
}

export default Walls;
