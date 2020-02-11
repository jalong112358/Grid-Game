import React, { Component, createContext } from "react";

export const Context = createContext();

class ContextProvider extends Component {
  state = {
    currentLvl: 1,
    lvlData: {},
    checkpointPosition: [10, 10],
    moveBlockOn: false,
    time: 0,
    directions: [],
    currentPositionX: 1,
    currentPositionY: 1,
    pathToMove: [],
    currentPathIteration: 0,
    modal: false,
    success: false,
    fail: { status: false, message: null }
  };

  componentDidMount() {
    this.getLevelData();
  }

  // Grabs a JSON file that contain data for the current level and sets the data to state
  getLevelData = () => {
    let lvlData = require(`./lvlData/${this.state.currentLvl}.js`);

    this.setState({
      lvlData: lvlData,
      time: lvlData.time
    });
    this.timer();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.moveBlockOn !== this.state.moveBlockOn) {
      if (this.state.moveBlockOn) {
        this.setPathToMove();
      }
    }
    if (prevState.currentPathIteration !== this.state.currentPathIteration) {
      if (this.state.currentPathIteration !== 0) {
        this.moveBlock();
      }
    }
  }

  // This function converts the users direction inputs into a path that the block will move.
  // Once the path is created, moveBlock() is called, which handles the block's movement
  setPathToMove = () => {
    const {
      directions,
      lvlData,
      currentPositionX,
      currentPositionY
    } = this.state;
    let x = currentPositionX;
    let y = currentPositionY;
    let pathToMove = [];
    const { walls } = lvlData;

    // Iterates over every direction that the user inputs
    directions.forEach(direction => {
      let closestBlock = null;
      switch (direction) {
        // UP
        case 0:
          // Checks for walls ABOVE the block's current position to decide how far to move up
          for (let i = 0; i < walls.length; i++) {
            if (walls[i].x == x && walls[i].y < y) {
              let numToIncrement = y - walls[i].y - 1;
              if (closestBlock == null || numToIncrement < closestBlock) {
                closestBlock = numToIncrement;
              }
            } else if (closestBlock == null) {
              closestBlock = y - 1;
            }
          }
          pathToMove.push({
            direction: "up",
            increment: closestBlock
          });
          y = y - closestBlock;
          break;
        // RIGHT
        case 1:
          console.log(pathToMove);

          // Checks for walls to the RIGHT the block's current position to decide how far to move up
          for (let i = 0; i < walls.length; i++) {
            if (walls[i].y == y && walls[i].x > x) {
              let numToIncrement = walls[i].x - x - 1;
              if (closestBlock == null || numToIncrement < closestBlock) {
                closestBlock = numToIncrement;
              }
            } else if (closestBlock == null) {
              closestBlock = 10 - x;
            }
          }
          pathToMove.push({
            direction: "right",
            increment: closestBlock
          });
          x = x + closestBlock;
          break;
        // DOWN
        case 2:
          // Checks for walls BELOW the block's current position to decide how far to move up
          for (let i = 0; i < walls.length; i++) {
            if (walls[i].x == x && walls[i].y > y) {
              let numToIncrement = walls[i].y - y - 1;
              if (closestBlock == null || numToIncrement < closestBlock) {
                closestBlock = numToIncrement;
              }
            } else if (closestBlock == null) {
              closestBlock = 10 - y;
            }
          }
          pathToMove.push({
            direction: "down",
            increment: closestBlock
          });
          y = y + closestBlock;
          break;
        // LEFT
        case 3:
          // Checks for walls to the LEFT of the block's current position to decide how far to move up
          for (let i = 0; i < walls.length; i++) {
            if (walls[i].y == y && walls[i].x < x) {
              let numToIncrement = x - walls[i].x - 1;
              if (closestBlock == null || numToIncrement < closestBlock) {
                closestBlock = numToIncrement;
              }
            } else if (closestBlock == null) {
              closestBlock = x - 1;
            }
          }
          pathToMove.push({
            direction: "left",
            increment: closestBlock
          });
          x = x - closestBlock;
          break;
        default:
      }
    });

    this.setState(
      {
        pathToMove: pathToMove
      },
      () => {
        this.moveBlock();
        console.log(this.state.pathToMove);
      }
    );
  };

  // Animates the block's movement along the path created by setPathToMove()
  moveBlock = () => {
    if (this.state.currentPathIteration < this.state.pathToMove.length) {
      let { pathToMove, currentPathIteration } = this.state;
      let direction = pathToMove[currentPathIteration].direction;
      let increment = pathToMove[currentPathIteration].increment;

      this.executeMove(direction, increment);

      setTimeout(() => {
        this.setState({
          currentPathIteration: this.state.currentPathIteration + 1
        });
      }, 350);
    } else if (
      this.state.currentPositionX === this.state.checkpointPosition[0] &&
      this.state.currentPositionY === this.state.checkpointPosition[1]
    ) {
      this.toggleSuccess();
    } else {
      this.toggleFail("You did not reach the yellow square.");
    }
  };

  executeMove = (direction, increment) => {
    switch (direction) {
      case "up":
        this.setState({
          currentPositionY: this.state.currentPositionY - increment
        });
        break;
      case "right":
        this.setState({
          currentPositionX: this.state.currentPositionX + increment
        });
        break;
      case "down":
        this.setState({
          currentPositionY: this.state.currentPositionY + increment
        });
        break;
      case "left":
        this.setState({
          currentPositionX: this.state.currentPositionX - increment
        });
        break;
      default:
    }
  };

  // Level Controls
  toggleSuccess = () => {
    this.setState({
      success: true
    });
  };
  toggleFail = message => {
    this.setState({
      fail: { status: true, message: message }
    });
  };

  timer = () => {
    let loop = setInterval(() => {
      if (this.state.moveBlockOn) {
        clearInterval(loop);
      } else if (this.state.time !== 0) {
        this.setState({
          time: this.state.time - 1
        });
      } else if (this.state.time === 0) {
        clearInterval(loop);
        this.toggleFail("You ran out of time.");
      }
    }, 1000);
  };

  // Resets state to default values and changes the "currentLvl" state variable accordingly
  nextLevel = () => {
    this.setState(
      {
        currentLvl: this.state.currentLvl + 1,
        lvlData: {},
        moveBlockOn: false,
        directions: [],
        currentPositionX: 1,
        currentPositionY: 1,
        currentPathIteration: 0,
        pathToMove: [],
        fail: false,
        success: false
      },
      () => {
        this.getLevelData();
      }
    );
  };
  restartLevel = () => {
    this.setState(
      {
        currentLvl: this.state.currentLvl,
        lvlData: {},
        moveBlockOn: false,
        directions: [],
        currentPositionX: 1,
        currentPositionY: 1,
        currentPathIteration: 0,
        pathToMove: [],
        fail: false,
        success: false
      },
      () => {
        this.getLevelData();
      }
    );
  };

  updateDirections = val => {
    this.setState({
      directions: [...this.state.directions, val]
    });
  };

  runGame = () => {
    this.setState({
      moveBlockOn: true
    });
  };

  clearBoard = () => {
    this.setState({
      directions: []
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          updateDirections: this.updateDirections,
          runGame: this.runGame,
          nextLevel: this.nextLevel,
          restartLevel: this.restartLevel,
          clearBoard: this.clearBoard
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
