import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {
  function handleClick(event){
    event.preventDefault();
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  console.log(onChangeColor)
  return <div className="child" style={{ backgroundColor: color }} onClick={handleClick} />;

}

export default Child;
