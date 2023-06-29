import React from "react";


function RstButton(props) {
  return (
    <div>
      <button id="restart" onClick={props.restart}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default RstButton;
