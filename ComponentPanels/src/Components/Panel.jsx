import React from 'react';

export default function Panel(props) {
  const [toggle, togglePanel] = React.useState(props.flag);

  return (
    <div>
      <input
        onChange={() => togglePanel(!toggle)}
        type="checkbox"
        checked={toggle}
      />{' '}
      {props.name}
      {toggle ? <fieldset> {props.children} </fieldset> : null}
    </div>
  );
}
