import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import InfoPanel from './components/InfoPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <Player />
      <InfoPanel />
      
    </div>
  );
}

export default App;
