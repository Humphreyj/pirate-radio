import React from 'react';
import styled from 'styled-components';
import Console from './Console';
import InfoRoutes from './info/InfoRoutes';
import InfoNav from './info/InfoNav';
import 'react-dropdown/style.css';
import { 
  // color, 
  // screen, 
} from '../util';

const InfoPanel = () => {
  const InfoPanel = styled.div`
    display: grid;
    grid-area: infopanel;
    grid-template-areas: 
      "nav"
      "info"
      "console";
    grid-template-columns: 100%;
    grid-template-rows: 2rem minmax(10rem, 1fr) 13rem;
    justify-content: space-between;
    margin-top: 0;
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
