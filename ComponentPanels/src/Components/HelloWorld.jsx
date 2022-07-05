import React from 'react';

export default function HelloWorld(attributes) {
  return (
    <div>
      <h1>Hello {attributes.name ? attributes.name : 'World'}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
