import React from "react";
import { Context } from "../../Context";
import "./modal.css";
const Clock = () => {
  return (
    <Context.Consumer>
      {context => {
        const { time } = context;

        return (
          <div id="clock" style={{ marginTop: "20px" }}>
            <h3 style={{ textAlign: "right" }}>Time</h3>

            <h1
              style={{
                textAlign: "right",
                color:
                  time <= 3 ? "rgb(154, 22, 22)" : "rgba(34, 133, 70, 0.751)"
              }}
            >
              {time}
            </h1>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Clock;
