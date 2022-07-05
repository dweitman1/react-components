import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { getRandomColor } from '../Common/RandomFunctions.js';

export default function SyncedSlider() {
  const [state, setState] = useState({ value: 0, color: null });

  const style = {
    color: state.color,
    fontSize: state.value + 12,
  };

  function getSlideValue(input) {
    const val = input.target.value;
    setState({ value: val, color: getRandomColor() });
  }

  return (
    <div style={style}>
      <Slider onChange={getSlideValue} size="small" valueLabelDisplay="auto" />
      {state.value}
    </div>
  );
}
