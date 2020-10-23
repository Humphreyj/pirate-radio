import React from 'react';
import styled from 'styled-components';
import Console from './Console';
import InfoRoutes from './info/InfoRoutes';
import InfoNav from './info/InfoNav';
import 'react-dropdown/style.css';
import { 
  // color, 
  screen, 
} from '../util';

const InfoPanel = () => {

  const InfoPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 95vh;
    position: relative;
    
    p{
      font-family: 'Topaz', monospace;
      line-height: 1.3em;
      font-size: 1.5em;
      text-align: center;
      width: 80%;
      margin: 10px auto;
    }
    @media (max-width: ${screen.md}px) {
      position: initial;
      height: 100%;
    }

    @media (min-width: ${screen.xl}px) {
      height: 93vh;
      
    }
    @media (max-width: ${screen.md}px) {
      height: 100%;
    }
  `;

    
  return (
    <InfoPanel>
      <InfoNav />
      <InfoRoutes />
      <Console />
    </InfoPanel>
  );
}

export default InfoPanel;
