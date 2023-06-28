import React from "react";

function TurnIndicator() {
  return (
    < div className="turnIndicator">
      <div id="turn">X'S TURN</div>
      <div className="turnContainer">
        <div id="X" className="turnBox">X</div>
        <div id="O" className="turnBox">O</div>
      </div>
    </div>
  );
}

export default TurnIndicator;
