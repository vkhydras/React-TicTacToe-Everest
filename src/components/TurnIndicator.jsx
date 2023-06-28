import React from "react";

function TurnIndicator(props) {
  const styles ={
    backgroundColor:props.turn &&!props.gameOver&&"#FF2E63"
  }
  const styles1 ={
    backgroundColor:!props.turn && !props.gameOver &&"#FF2E63"
  }
  
  let player =props.turn ? "O ":"X "
  

  return (
    < div className="turnIndicator">
      {!props.win && !props.draw ?<div id="turn">{props.turn ? "X":"O"}'S TURN</div>
      :<div id="turn">
         {props.win && <span>{player}</span>}
         {props.draw &&!props.win ? "DRAW":"WIN"}
         </div>}
      <div className="turnContainer">
        <div id="X" className="turnBox" style={styles}>X</div>
        <div id="O" className="turnBox" style={styles1}>O</div>
      </div>
    </div>
  );
}

export default TurnIndicator;
