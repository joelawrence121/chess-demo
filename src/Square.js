import wK from './pieces/wK.svg'
import wQ from './pieces/wQ.svg'
import wB from './pieces/wB.svg'
import wN from './pieces/wN.svg'
import wR from './pieces/wR.svg'
import wP from './pieces/wP.svg'
import bK from './pieces/bK.svg'
import bQ from './pieces/bQ.svg'
import bB from './pieces/bB.svg'
import bN from './pieces/bN.svg'
import bR from './pieces/bR.svg'
import bP from './pieces/bP.svg'
import blank from './pieces/blank.svg'

const icons = {
    "wK" : wK,
    "wQ" : wQ,
    "wB" : wB,
    "wN" : wN,
    "wR" : wR,
    "wP" : wP,
    "bK" : bK,
    "bQ" : bQ,
    "bB" : bB,
    "bN" : bN,
    "bR" : bR,
    "bP" : bP,
    null : blank
}


function Square(props) {
    if (props.black) {
        return (
            <button className="square_black" onClick={() => props.onClick()}>
                <img src={icons[props.value]} alt="und" width="40" height="40"/>
            </button>
        )
    } else {
        return (
            <button className="square_white" onClick={() => props.onClick()}>
                <img src={icons[props.value]} alt="und" width="40" height="40"/>
            </button>
        )
    }
}

export default Square;