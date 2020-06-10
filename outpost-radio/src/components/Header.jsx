import React from 'react';
import styled from 'styled-components';
import { 
  color,
  // screen, 
} from '../util';

const Header = () => {
  const TrialWrap = styled.div`
    display: grid;
    grid-area: header;
    justify-content: end;
    width: 100%;
  `;
  const Trial = styled.p`
    color: ${color.lightBlackish};
    margin-top: .5rem;
    text-align: center;
    font-family: 'Topaz', monospace;
  `;
  return (
    <TrialWrap className="body-width">
      <Trial>starSTRM v1.9.4a /*unlicensed copy*/</Trial>
    </TrialWrap>
  );
};

export default Header;
