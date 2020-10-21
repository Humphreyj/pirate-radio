import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import CustomAudioPlayer from './CustomAudioPlayer';
import AudioSpectrum from 'react-audio-spectrum';
import 'react-h5-audio-player/lib/styles.css';
import { 
  color,
  screen, 
} from '../util';
import bannerLogo from '../img/outpost-banner.png';
import sample from '../audio/sample.mp3'

const Player = () => {
  const PlayerWrap = styled.div`
    background-color: ${color.blackish};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    border-right: 2px dashed ${color.whitish};
    padding: 5%;
    @media (max-width: ${screen.lg - 1}px) {
      border-right: none;
    }

    h3 {
      color: white;
      width: 20%;
    }
    
    .audio {
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

 
  

  

  return (
    <PlayerWrap>
      <Banner>
        <img src={bannerLogo} alt="outpost radio logo" />
      </Banner>
      <CustomAudioPlayer
        sample={sample} 
      />
      
      <AudioSpectrum
          id="audio-canvas"
          height={200}
          width={550}
          audioId={'player'}
          capColor={'red'}
          capHeight={2}
          meterWidth={6}
          meterCount={512}
          meterColor={[
            {stop: 0, color: '#f00'},
            {stop: 0.5, color: '#0CD7FD'},
            {stop: 1, color: 'red'}
          ]}
          gap={4}
        />
      <Feed />
    </PlayerWrap>
  );
}

export default Player;
