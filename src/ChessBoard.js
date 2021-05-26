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
            whiteToMove: true
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