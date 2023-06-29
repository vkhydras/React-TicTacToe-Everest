import React from "react";


export default function RstButton(props) {
  const marginRight = {
    margin: "8px"
  }
  return (
    <button id="restart" onClick={props.restart} style={marginRight}>
      {props.gameOver? "NEW GAME" : "RESTART"}
    </button>
  );
}

