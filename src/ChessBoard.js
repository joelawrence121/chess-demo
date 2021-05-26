import './App.css';
import React from "react";
import Square from "./Square";

class ChessBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: [
                ["wR", "wN", "wB", "wK", "wQ", "wB", "wN", "wR"],
                ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
                ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
            ],
            whiteToMove: true,
            select: false,
        }
    }

    renderSquare(x, y) {
        return <Square
            value={this.state.squares[x][y]}
            onClick={() => this.handleClick(x, y)}
            black={(x + y) % 2}
        />
    }

    handleClick(x, y) {
        if (!this.state.select && !this.isEmpty(x, y)) {
            // x and y are selected
            this.setState({
                select: true,
                selX: x, selY: y,
            })
        } else {
            // x and y are the next position
            if (!this.isSamePosition(x, y) && !this.isEmpty(this.state.selX, this.state.selY)) {
                this.handleMove(x, y);
            }
            this.setState({
                select: false
            })
        }
    }

    handleMove(nextX, nextY) {
        const newSquares = this.state.squares;
        newSquares[nextX][nextY] = newSquares[this.state.selX][this.state.selY];
        newSquares[this.state.selX][this.state.selY] = null;

        this.setState({
            squares: newSquares,
            nextX: nextX, nextY: nextY,
            whiteToMove: !this.state.whiteToMove
        })
    }

    isSamePosition(nextX, nextY) {
        return (nextX === this.state.selX && nextY === this.state.selY);
    }

    isEmpty(x, y) {
        return !this.state.squares[x][y];
    }

    render() {
        return (
            <div>
                <div className="status">{this.state.whiteToMove ? "W" : "B"}</div>
                {this.state.squares.map((row, x) =>
                    <div className="board-row">
                        {row.map((col, y) =>
                            this.renderSquare(x, y)
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default ChessBoard;