import React from "react";

function Cells(props) {
  return (
    <div>
        <div 
        className="cell" 
        id={props.id} 
        onClick = {() => props.cellClick(props.id)}
        >
          {props.value}
          </div>
    </div>
  );
}

export default Cells;
