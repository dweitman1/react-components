import React, { useRef, useEffect } from 'react';
import '../style.css';
import { getRandomColor, getRandomInt } from '../Common/RandomFunctions.js';

export default function CustomCanvas() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.strokeStyle = getRandomColor();
    ctx.beginPath();
    for (let i = 0; i < 200; i += 10) {
      ctx.arc(i, i, i * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <div>
      <canvas ref={canvasRef} id="myCanvas" width={300} height={300}></canvas>
    </div>
  );
}
