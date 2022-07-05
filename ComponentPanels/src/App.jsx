import React from 'react';
import {
  Panel,
  HelloWorld,
  ColorString,
  CircleClicker,
  SyncedSlider,
  CustomCanvas,
  MemoryMatch,
} from './Components/_ComponentIndex.js';
import './style.css';

export default function App() {
  return (
    <div>
      <Panel name="HelloWorld" flag={true}>
        <HelloWorld name="Dan" />
      </Panel>

      <Panel name="ColorString">
        <ColorString />
      </Panel>

      <Panel name="CircleClicker" flag={0}>
        <CircleClicker />
      </Panel>

      <Panel name="SyncedSlider">
        <SyncedSlider />
      </Panel>

      <Panel name="CustomCanvas">
        <CustomCanvas />
      </Panel>
    </div>
  );
}
