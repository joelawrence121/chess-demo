import './App.css';
import React from "react";

function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}

class ChessBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(8).fill(Array(8).fill(null)),
            whiteToMove: true
        }
    }

    renderSquare(x, y) {
        return <Square
            value={this.state.squares[x][y]}
            onClick={() => this.handleClick(x, y)}
        />
    }

    handleClick(x, y) {

    }

    render() {
        return (
            <div>
                <div className="status">{this.state.whiteToMove ? "W" : "B"}</div>
                {this.state.squares.map((row) =>
                    <div className="board-row">
                        {row.map((col, i) =>
                            this.renderSquare(i, col)
                        )}
                    </div>
                )}
            </div>
        );
    }

}

export default ChessBoard;