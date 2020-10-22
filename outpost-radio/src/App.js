import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getSongInfo} from './Redux/actions';
import styled from 'styled-components';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import Player from './components/Player';

import './App.css';
import './sass/global.scss'
import { 
   
  screen, 
} from './util';
import borderImg from './img/border.svg';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getSongInfo())
   
  },[dispatch])
 
  

  const Container = styled.div`
    border-image-source: url('https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png');
    border-image: url(${borderImg}) 30;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    @media (max-width: ${screen.lg - 1}px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    @media (min-width: ${screen.lg}px) {
      
    }

    @media (min-width: ${screen.xl}px) {
      
    }
  `;

  const Border = styled.div`
    

    width: 2px;
    height: 100%;
  `;
 

  return (
    <Router>
      <div className='overlay'></div>
      <div className='scanline'></div>
        <div className="App">
        <Header className="body-width" />
        <Container className="body-width">
          <Player />
          <Border />
          <InfoPanel />
        </Container>
      </div>
    </Router>
    
  );
}

export default App;
