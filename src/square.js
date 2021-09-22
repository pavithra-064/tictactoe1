
import React from "react";
import "./App.css";

function Square({val,choosesq}) {
  return (
    <div className="Square"  onClick={choosesq}>
        {val}
    </div>
  );
}

export default Square;