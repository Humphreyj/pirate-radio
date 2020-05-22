import React from 'react';
import styled from 'styled-components';
import { 
  color,
  // screen, 
} from '../util';

const Header = () => {
  const TrialWrap = styled.div`
    align-items: center;
    display: grid;
    justify-content: end;
    margin: 0 auto;
  `;
  const Trial = styled.p`
    color: ${color.lightBlackish};
    margin-top: .5rem;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
  `;
  return (
    <TrialWrap className="body-width">
      <Trial>starSTRM v1.9.4a /unlicensed copy*/</Trial>
    </TrialWrap>
  );
};

export default Header;
