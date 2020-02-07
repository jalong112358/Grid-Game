import React from "react";
import { Context } from "../../Context";

export default function Checkpoint(props) {
  // console.log(props.position);
  return (
    <svg
      className="player"
      style={{
        position: "absolute",
        left: (props.position[0] - 1) * 50,
        top: (props.position[1] - 1) * 50
      }}
      height="50"
      width="50"
      opacity=".5"
    >
      <rect width="43" height="43" fill="#228547" />
    </svg>
  );
}
