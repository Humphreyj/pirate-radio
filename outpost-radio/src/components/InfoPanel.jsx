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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    width: 100%;
    min-height: 60em;
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
