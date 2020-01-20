import React from 'react';
import styled from 'styled-components';
import bannerLogo from '../img/outpost-banner.png';
import { 
  // color,
  screen, 
} from '../util';

const Player = () => {
  const PlayerWrap = styled.div`
    background-color: black;
    display: grid;
    grid-area: player;
    height: 100%;
    margin: 0 auto;
    width: 100%;

    h3 {
      color: white;
      width: 20%;
    }
    
    iframe {
      align-self: center;
      background-color: transparent;
      border: 0;
      color: red;
      height: 8.75rem;
      margin: 0 auto;
      padding: 1rem;
    }
    
    @media (max-width: ${screen.md - 1}px) {
      height: 32rem;
    }

    @media (min-width: ${screen.md}px) {
      height: 32rem;
    }
  `;

  const Banner = styled.div`
    align-items: center;
    display: grid;
    justify-content: space-between;
    padding:  0 1rem;

    img {
      width: 50%;

      @media (min-width: ${screen.md}px) {
        margin: 0 auto;
        width: 70%;
      }
    }
  `;


  return (
    <PlayerWrap>
      <Banner>
        <img src={bannerLogo} alt="outpost radio logo" />
      </Banner>
      <iframe title='playa' src="https://sync.outpost.radio/public/comms/embed" width='96%' height='25%' margin='0 auto' allowtransparency="true"></iframe>
      {/* <Feed /> */}
    </PlayerWrap>
  );
}

export default Player;
