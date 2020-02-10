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
            height="50"
            width="50"
            opacity=".75"
          >
            <rect width="43" height="43" fill="#7E7E7E" />
          </svg>
        ))}
    </div>
  );
}

export default Walls;
