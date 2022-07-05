import React from 'react';
import '../style.css';
import { getRandomColor, getRandomInt } from '../Common/RandomFunctions.js';

export default function CircleClicker() {
  function draw() {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(
      getRandomInt(0, c.width),
      getRandomInt(0, c.height),
      getRandomInt(0, 50),
      0,
      2 * Math.PI
    );
    ctx.strokeStyle = getRandomColor();
    ctx.stroke();
  }

  function erase() {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
  }

  return (
    <div>
      <canvas id="myCanvas" width={200} height={100}></canvas>
      <br />
      <button onClick={draw}>O</button> <button onClick={erase}> X </button>
    </div>
  );
}
