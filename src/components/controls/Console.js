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
                          height="40"
                          width="40"
                          fill="#434343"
                          style={{ margin: "10px" }}
                        >
                          <path d="M20 0 L40 40 L0 40 Z" />
                        </svg>
                      );
                      break;
                    case 1:
                      return (
                        <svg
                          height="40"
                          width="40"
                          fill="#434343"
                          style={{ margin: "10px" }}
                        >
                          <path d="M0 0 L40 20 L0 40 Z" />
                        </svg>
                      );
                      break;
                    case 2:
                      return (
                        <svg
                          height="40"
                          width="40"
                          fill="#434343"
                          style={{ margin: "10px" }}
                        >
                          <path d="M0 0 L40 0 L20 40 Z" />
                        </svg>
                      );
                      break;
                    case 3:
                      return (
                        <svg
                          height="40"
                          width="40"
                          fill="#434343"
                          style={{ margin: "10px" }}
                        >
                          <path d="M0 20 L40 0 L40 40 Z" />
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
