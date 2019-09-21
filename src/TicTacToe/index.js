import React from "react";
import "./styles.css";

class TicTacToe extends React.Component {
  state = {
    matrix: [],
    currentPlayer: "X",
    winner: false,
    selC: null,
    selR: null,
    matrixSize: 3
  };

  generateBoard = () => {
    const setGrid = new Array(this.state.matrixSize).fill(null);
    const grid = [];
    for (let i = 0; i < setGrid.length; i++) {
      grid.push([...setGrid]);
    }
    this.setState({
      matrix: grid
    });
  };

  componentDidMount() {
    this.generateBoard();
  }

  isWinner = () => {
    const { selC, selR, matrixSize, matrix, currentPlayer } = this.state;

    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;

    if (selC === null || selR === null) {
      return;
    }

    for (let i = 0; i < matrixSize; i++) {
      console.log(i, selC, selR);
      if (matrix[i][selC] !== currentPlayer) {
        vertical = false;
      }
      if (matrix[selR][i] !== currentPlayer) {
        horizontal = false;
      }

      if (matrix[i][i] !== currentPlayer) {
        d1 = false;
      }

      if (matrix[i][matrixSize - i - 1] !== currentPlayer) {
        d2 = false;
      }
    }
    if (vertical || horizontal || d1 || d2) {
      this.setState({
        winner: true
      });
    }
  };

  squareClick = async (r, c) => {
    await this.isWinner();
    if (!this.state.matrix[r][c] && !this.state.winner) {
      const switchPlayer = this.state.currentPlayer === "X" ? "O" : "X";
      const matrixCopy = [...this.state.matrix];
      matrixCopy[r][c] = switchPlayer;
      this.setState({
        currentPlayer: switchPlayer,
        matrix: matrixCopy,
        selC: c,
        selR: r
      });
    }

    // console.table(this.state.matrix);
  };

  reset = () => {
    this.setState(
      {
        currentPlayer: "X",
        matrix: [],
        winner: false
      },
      () => {
        this.generateBoard();
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <h4>TicTacToe</h4>
        <button onClick={this.reset}>Reset</button>
        <div className="clearfix" />
        <br />
        {this.state.matrix.map((col, c) => (
          <div key={c} className="grid-col">
            {col.map((row, r) => {
              return (
                <div
                  key={r}
                  onClick={() => this.squareClick(r, c)}
                  className="grid-row"
                >
                  {this.state.matrix[r][c]}
                </div>
              );
            })}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default TicTacToe;
