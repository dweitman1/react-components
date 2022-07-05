import React, { useState } from 'react';
import sha256 from 'js-sha256';

export default function DeterministicColorString() {
  const [state, setState] = useState({ text: '', color: null });

  const style = {
    color: state.color,
  };

  function getText(input) {
    const newText = input.target.value;
    setState({ text: newText, color: '#' + sha256(newText).substring(0, 6) });
  }

  return (
    <div style={style}>
      {state.text}
      <br />
      <input onChange={getText} /> <br />
      {state.text}
    </div>
  );
}
