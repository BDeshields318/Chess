
import './Chessboard.css';


const vertical = ["1","2","3","4","5","6","7","8"];
const horizontal = ["a","b","c","d","e","f","g","h"];

export default function Chessboard() {
    let board = [];

    for (let i = vertical.length - 1; i >= 0; i--) {
        for(let index = 0; index < horizontal.length; index++) {
            const number = i + index + 2;

            if(number % 2 === 0) {
                board.push(
                    <div className='tile dark-tile'>[{horizontal[index]}{vertical[index]}]</div>
                );
            } else {
                board.push(
                    <div className='tile white-tile'>[{horizontal[index]}{vertical[index]}]</div>
                );
            }
            
        }
    }
    
    return <div id="chessboard">{board}</div>
}