import React, { Component, createContext } from "react";

export const Context = createContext();

class ContextProvider extends Component {
  state = {
    currentLvl: 1,
    lvlData: {},
    checkpointPosition: [10, 10],
    gameLoopOn: false,
    directions: [],
    currentPositionX: 1,
    currentPositionY: 1,
    pathToMove: [],
    currentPathIteration: 0,
    modal: false,
    success: false
  };

  nextLevel = () => {
    this.setState(
      {
        currentLvl: this.state.currentLvl + 1,
        lvlData: {},
        gameLoopOn: false,
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
        gameLoopOn: false,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gameLoopOn !== this.state.gameLoopOn) {
      if (this.state.gameLoopOn) {
        this.setPathToMove();
      }
    }
    if (prevState.currentPathIteration !== this.state.currentPathIteration) {
      if (this.state.currentPathIteration !== 0) {
        this.gameLoop();
      }
    }
  }

  toggleSuccess = () => {
    this.setState({
      success: true
    });
  };
  toggleFail = () => {
    this.setState({
      fail: true
    });
  };

  setPathToMove = () => {
    let {
      directions,
      lvlData,
      currentPositionX,
      currentPositionY
    } = this.state;
    let x = currentPositionX;
    let y = currentPositionY;
    let pathToMove = [];

    for (let i = 0; i < directions.length; i++) {
      switch (directions[i]) {
        // UP
        case 0:
          let closestBlockUp = null;
          for (let i = 0; i < lvlData.walls.length; i++) {
            if (lvlData.walls[i].x == x && lvlData.walls[i].y < y) {
              let numToIncrement = y - lvlData.walls[i].y - 1;
              if (closestBlockUp == null || numToIncrement < closestBlockUp) {
                closestBlockUp = numToIncrement;
              }
            } else if (closestBlockUp == null) {
              closestBlockUp = y - 1;
            }
          }
          pathToMove.push({
            direction: "up",
            increment: closestBlockUp
          });
          y = y - closestBlockUp;
          break;
        // RIGHT
        case 1:
          console.log(pathToMove);
          let closestBlockRight = null;
          for (let i = 0; i < lvlData.walls.length; i++) {
            if (lvlData.walls[i].y == y && lvlData.walls[i].x > x) {
              let numToIncrement = lvlData.walls[i].x - x - 1;
              if (
                closestBlockRight == null ||
                numToIncrement < closestBlockRight
              ) {
                closestBlockRight = numToIncrement;
              }
            } else if (closestBlockRight == null) {
              closestBlockRight = 10 - x;
            }
          }
          pathToMove.push({
            direction: "right",
            increment: closestBlockRight
          });
          x = x + closestBlockRight;
          break;
        // DOWN
        case 2:
          let closestBlockDown = null;

          for (let i = 0; i < lvlData.walls.length; i++) {
            if (lvlData.walls[i].x == x && lvlData.walls[i].y > y) {
              let numToIncrement = lvlData.walls[i].y - y - 1;
              if (
                closestBlockDown == null ||
                numToIncrement < closestBlockDown
              ) {
                closestBlockDown = numToIncrement;
              }
            } else if (closestBlockDown == null) {
              closestBlockDown = 10 - y;
            }
          }
          pathToMove.push({
            direction: "down",
            increment: closestBlockDown
          });
          y = y + closestBlockDown;
          break;
        // LEFT
        case 3:
          let closestBlockLeft = null;
          for (let i = 0; i < lvlData.walls.length; i++) {
            if (lvlData.walls[i].y == y && lvlData.walls[i].x < x) {
              let numToIncrement = x - lvlData.walls[i].x - 1;
              if (
                closestBlockLeft == null ||
                numToIncrement < closestBlockLeft
              ) {
                closestBlockLeft = numToIncrement;
              }
            } else if (closestBlockLeft == null) {
              closestBlockLeft = x - 1;
            }
          }
          pathToMove.push({
            direction: "left",
            increment: closestBlockLeft
          });
          x = x - closestBlockLeft;
          break;
        default:
      }
    }

    this.setState(
      {
        pathToMove: pathToMove
      },
      () => {
        this.gameLoop();
        console.log(this.state.pathToMove);
      }
    );
  };

  gameLoop = () => {
    if (this.state.currentPathIteration < this.state.pathToMove.length) {
      let { pathToMove, currentPathIteration } = this.state;
      let direction = pathToMove[currentPathIteration].direction;
      let increment = pathToMove[currentPathIteration].increment;

      this.executeMove(direction, increment);

      setTimeout(() => {
        this.setState({
          currentPathIteration: this.state.currentPathIteration + 1
        });
      }, 500);
    } else if (
      this.state.currentPositionX === this.state.checkpointPosition[0] &&
      this.state.currentPositionY === this.state.checkpointPosition[1]
    ) {
      this.toggleSuccess();
    } else {
      this.toggleFail();
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

  getLevelData = () => {
    let lvlData = JSON.parse(
      JSON.stringify(require(`../lvlData/${this.state.currentLvl}.json`))
    );

    this.setState({
      lvlData: lvlData
    });
  };

  updateDirections = val => {
    this.setState({
      directions: [...this.state.directions, val]
    });
  };

  componentDidMount() {
    this.getLevelData();
  }

  turnOnGameLoop = () => {
    this.setState({
      gameLoopOn: true
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          updateDirections: this.updateDirections,
          turnOnGameLoop: this.turnOnGameLoop,
          nextLevel: this.nextLevel,
          restartLevel: this.restartLevel
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
