import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import InfoPanel from './components/InfoPanel';
import styled from 'styled-components';

function App() {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  margin: 2em auto 0em auto;
  

  @media(min-width: 800px) {
    flex-direction: row;
    
  }
  `
  return (
    <div className="App">
      <Header />
      <Container>
        <Player />
        <InfoPanel />
      </Container>
      
      
    </div>
  );
}

export default App;
