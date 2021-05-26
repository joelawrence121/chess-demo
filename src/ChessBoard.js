import './App.css';
import React from "react";

function Square(props) {
    if (props.black) {
        return (
            <button className="square_black" onClick={() => props.onClick()} >
                {props.value}
            </button>
        )
    }
    else {
        return (
            <button className="square_white" onClick={() => props.onClick()} >
                {props.value}
            </button>
        )
    }
}

class ChessBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: [
                ["R", "N", "B", "K", "Q", "B", "N", "R"],
                ["P", "P", "P", "P", "P", "P", "P", "P"],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                ["P", "P", "P", "P", "P", "P", "P", "P"],
                ["R", "N", "B", "Q", "K", "B", "N", "R"],
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