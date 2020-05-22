import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import { 
  color,
  screen, 
} from '../util';
import bannerLogo from '../img/outpost-banner.png';

const Player = () => {
  const PlayerWrap = styled.div`
    background-color: ${color.blackish};
    display: grid;
    grid-area: player;
    grid-template-areas:
      "banner"
      "iframe"
      "feed";
    grid-template-columns: 100%;
    grid-template-rows: 10rem 10rem 1fr;
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
      // height: 32rem;
    }

    @media (min-width: ${screen.md}px) {
      // height: 32rem;
    }
  `;

  const Banner = styled.div`
    align-items: center;
    display: grid;
    grid-area: banner;
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

  const PlayerIframe = styled.div`
    grid-area: iframe;
  `;

  return (
    <PlayerWrap>
      <Banner>
        <img src={bannerLogo} alt="outpost radio logo" />
      </Banner>
      <PlayerIframe>
        <iframe title='playa' src="https://sync.outpost.radio/public/comms/embed" width='100%' height='15rem' margin='0 auto' allowtransparency="true"></iframe>
      </PlayerIframe>
      <Feed />
    </PlayerWrap>
  );
}

export default Player;
