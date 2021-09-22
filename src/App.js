import './App.css';
import './square'
import { useState ,useEffect} from 'react';
import Square from './square';
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const[PickOfUser,setPickOfUser]=useState("");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  //const[ai,setai]=useState("X","O");


 useEffect(() => {
  checkWin();
  checkIfTie();
  if (PickOfUser === "X") {
    setPickOfUser("O");
  } else {
    setPickOfUser("X");
  }
 
}, [board]);


useEffect(() => {
  if (result.state !== "none") {
    alert(`Game Finished! Winning Player: ${result.winner}`);
    restartGame();
  }
}, [result]);


const choosesq = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return PickOfUser;
        }

        return val;
      })
    );
    
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: PickOfUser, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPickOfUser("O");
  };

const saveSettings =()=>{
  alert("You have selected "+PickOfUser);
}





  return (
    <div className="App">
      <div id="mt-5">
            <h2>Select Your Side</h2>
            <div className="option" onClick={() =>setPickOfUser("X")}>
              <b>X</b>
            </div>
            <div className="option" onClick={() =>setPickOfUser("O")}>
              <b>O</b>
            </div>
          </div>
          <br /> <br /> <br />
          <button className="settings-gui" onClick={saveSettings}>OK</button>
       <div className="board">
        <div className="row">
        <Square val={board[0]} choosesq={()=>{
            choosesq(0);
        }}
        />
        <Square val={board[1]} choosesq={()=>{
          choosesq(1);
        }}
        />
        <Square val={board[2]} choosesq={()=>{
           choosesq(2);
        }}
        />
        </div>
        <div className="row">
        <Square val={board[3]} choosesq={()=>{
          choosesq(3);
        }}
        />
         <Square val={board[4]} choosesq={()=>{
           choosesq(4);
        }}
        />
         <Square val={board[5]} choosesq={()=>{
           choosesq(5);
        }}
        />
        </div>
        <div className="row">
        <Square val={board[6]} choosesq={()=>{
           choosesq(6);
        }}
        />
         <Square val={board[7]} choosesq={()=>{
           choosesq(7);
        }}
        />
         <Square val={board[8]} choosesq={()=>{
           choosesq(8);
        }}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
