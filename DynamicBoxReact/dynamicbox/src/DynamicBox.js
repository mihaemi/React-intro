import './App.css';
import React, { useState } from 'react';

function DynamicBox(props) {
  let [size, setSize] = useState(props.size)
  let [color, setColor] = useState(props.color)
  let boxStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color    
  }

  const increase = () => {
    setSize(size => size+10)
  } 

  const decrease = () => {
    setSize(size => size-10)
  }   

  const changeColor = (e) => {
    setColor(e.target.value);
  }

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <input type="color" value={color} onChange={changeColor} />
    </div>
  )
}

export default DynamicBox;
