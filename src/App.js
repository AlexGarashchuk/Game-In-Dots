import React from 'react';
import './App.css';
import { Enter } from './Components/Enter';
import {LoadedBoard} from './Components/LoadedBoard';

function App() {
  return (
    <div className="App">
      <Enter />
      <LoadedBoard />
    </div>
  );
}

export default App;
