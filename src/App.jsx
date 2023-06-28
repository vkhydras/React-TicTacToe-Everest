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
  function cellClick(e) {
    let id = e.target.id
    // setCells((prevCells) => {
    //   const updatedCells = prevCells.map((cell) => {
    //     if (cell.id === id && !cell.clicked) {
    //       return {
    //         ...cell,
    //         value: "x",
    //         clicked: true
    //       };
    //     }
    //     return cell;
    //   });
    //   return updatedCells;
    // });
    setCells(prev=>prev.map(cell=>{
      return cell.id === id && !cell.clicked ?{
        ...cell,
        value:"X",
        clicked:true}
        :cell
    }))
    console.log(id +"clicked")
    console.log(id +cells.value)
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
      <TurnIndicator  />
      <div className="board">
        {boxes}
      </div>
      {gameOver && <RstButton />}

    </div>
  );
}

export default App;
