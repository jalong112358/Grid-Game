import React from "react";
import { Context } from "../../Context";

export default function Console() {
  return (
    <Context.Consumer>
      {context => {
        const { directions } = context;

        return (
          <div>
            <p style={{ color: "#A9A9A9", marginBottom: "10px" }}>
              PATH SEQUENCE
            </p>
            <div id="console">
              {directions &&
                directions.map(dir => {
                  switch (dir) {
                    case 0:
                      return (
                        <svg
                          height="20"
                          width="20"
                          fill="#228547"
                          style={{ margin: "10px" }}
                        >
                          <path d="M10 0 L20 20 L0 20 Z" />
                        </svg>
                      );
                      break;
                    case 1:
                      return (
                        <svg
                          height="20"
                          width="20"
                          fill="#228547"
                          style={{ margin: "10px" }}
                        >
                          <path d="M0 0 L20 10 L0 20 Z" />
                        </svg>
                      );
                      break;
                    case 2:
                      return (
                        <svg
                          height="20"
                          width="20"
                          fill="#228547"
                          style={{ margin: "10px" }}
                        >
                          <path d="M0 0 L20 0 L10 20 Z" />
                        </svg>
                      );
                      break;
                    case 3:
                      return (
                        <svg
                          height="20"
                          width="20"
                          fill="#228547"
                          style={{ margin: "10px" }}
                        >
                          <path d="M0 10 L20 0 L20 20 Z" />
                        </svg>
                      );
                      break;

                    default:
                  }
                })}
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
