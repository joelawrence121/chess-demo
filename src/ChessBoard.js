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
            selX: null,
            selY: null,
            nextX: null,
            nextY: null
        }
    }

    renderSquare(x, y) {
        return <Square
            value={this.state.squares[x][y]}
            onClick={() => this.handleClick(x, y)}
            black={ (x + y) % 2 }
        />
    }

    handleClick(x, y) {
        if (!this.state.select) {
            this.setState({
                select: !this.state.select,
                selX: x,
                selY: y,
            })
        }
        else {
            this.setState({
                select: !this.state.select,
                nextX: x,
                nextY: y,
            })

            // don't move if same position
            if (!(x === this.state.selX && y === this.state.selY)) {
                this.handleMove(x, y);
            }
        }
    }

    handleMove(nextX, nextY) {
        const newSquares = this.state.squares;
        newSquares[nextX][nextY] = newSquares[this.state.selX][this.state.selY];
        newSquares[this.state.selX][this.state.selY] = null;
        this.setState({
            squares: newSquares
        })
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