import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { 
  color,
  screen, 
} from '../util';
import bannerLogo from '../img/outpost-banner.png';
import sample from '../audio/Session4part1.mp3'

const Player = () => {
  const PlayerWrap = styled.div`
    background-color: ${color.blackish};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    width: 100%;

    h3 {
      color: white;
      width: 20%;
    }
    
    .rhap_container {
      align-self: center;
      background-color: transparent;
      border: 0;
      height: 8.75rem;
      margin: 0 auto;
      padding: 1rem 0;
      color: ${color.whitish};
    
    
    @media (max-width: ${screen.md - 1}px) {
      // height: 32rem;
    }

    @media (min-width: ${screen.md}px) {
      // height: 32rem;
    }
  `;

  const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:  0 1rem;

    img {
      width: 80%;
      @media (max-width: ${screen.md}px) {
        margin: 0 auto;
        width: 70%;
      }
    }
  `;

  let track = 'Ultimate Space Jam'

  

  return (
    <PlayerWrap>
      <Banner>
        <img src={bannerLogo} alt="outpost radio logo" />
      </Banner>
      <AudioPlayer
      src={sample}
      customAdditionalControls={[]}
      header={`Now playing: ${track}`}
    // other props here
    // src="https://sync.outpost.radio/public/comms/embed"
  />
      <Feed />
    </PlayerWrap>
  );
}

export default Player;
