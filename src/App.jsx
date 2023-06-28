import React, { useState } from "react";
import {nanoid} from 'nanoid'
import TurnIndicator from "./components/TurnIndicator";
import RstButton from "./components/RstButton";
import Cells from "./components/Cells";



function App() {
  const [cells,setCells] = useState(createCells)
  const [options,setOptions] = useState(createOptions)
  const [gameOver,setGameOver] = useState(false)
  const [Xturn,setXturn] = useState(true)
  const [win,setWin] = useState(false)
  const [draw,setDraw] = useState(false)
  const [winner, setWinner] = useState("");
  const winningCombo = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
 ]
  

  function createCells(){
    const cellsArray = []
    
    for (let i = 0;i < 9;i++){
      cellsArray.push({
        value:"",
        id:i,
        clicked:false
      })
    }
    return cellsArray
  }

  function createOptions(){
    const options = []
    for (let i = 0;i < 9;i++){
      options.push(null)
    }
    return options
  }
  function cellClick(id) {
    setCells((prevCells) => {
      return prevCells.map((cell) => {
        if (cell.id === id && !cell.clicked && win===false) {
          return {
            ...cell,
            value:Xturn?"X":"O",
            clicked: true
          };
        }
        return cell;
      });
    });
    if(win===false&&draw===false){
      if (!options[id]){
        options[id] = Xturn?"X":"O"
     }
    }
    setXturn(prev=>!prev)
   
    if(!options.includes(null) && !win){
      setDraw(true)
      setGameOver(true)
      console.log("draw")
    }
      checkWinner()
      console.log(options)
  }

  function checkWinner(){
    for (let i of winningCombo){
      let [a,b,c] = i
      if ( options[a] && (options[a] == options[b] && options[a] == options[c])){
        setWin(true)
        setGameOver(true)
         console.log('there is a win' )
      }
   } 
   
  }

    const boxes = cells.map(cellInfo => <Cells
      key={nanoid()} 
      value={cellInfo.value} 
      id = {cellInfo.id} 
      clicked = {cellInfo.clicked} 
      cellClick ={cellClick}
      />
    )

  return (
    <div>
      <TurnIndicator turn={Xturn} win={win} draw={draw} winnerr={winner} gameOver={gameOver}/>
      <div className="board">
        {boxes}
      </div>
      {gameOver && <RstButton />}

    </div>
  );
}

export default App;
