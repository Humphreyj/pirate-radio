import React,{useState,useEffect,createRef,useRef} from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import CustomAudioPlayer from './CustomAudioPlayer';
import AudioSpectrum from 'react-audio-spectrum';
import AudioPlayer from 'react-h5-audio-player';
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
        width: 100%;
      }
    }
  `;
const [musicPlaying,setPlaying] = useState(false)
 let screenWidth = window.screen.width;
 let playerWidth = 200
 if (screenWidth < 766) {
   playerWidth = 275
 }else {
   playerWidth = 550
 }
 console.log(screenWidth)
 let player = createRef()
 
 player = useRef(player)
 console.log(player)
let current_audio = ''
 useEffect(() => {
   if(player.current.audio.current !== null) {
     
      current_audio = player.current.audio.current
      console.log(current_audio)
   }

 }, [])
 
 
 
 
  

  
  
  return (
    <PlayerWrap>
      <Banner>
        <img src={bannerLogo} alt="outpost radio logo" />
      </Banner>
      <AudioPlayer
      src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020"
      ref={player}
      className="player"
      customAdditionalControls= {[]}
      onPlay={e => setPlaying(true)}
      // other props here
    />
    {/* <iframe src="https://sync.outpost.radio/public/comms/embed" frameborder="0" id='playerFrame' ref={player} allowtransparency="true" style={{width: "100%", minHeight: "150px", border: 0}}></iframe> */}
   
      
      {musicPlaying? <AudioSpectrum
          id="audio-canvas"
          height={200}
          width={playerWidth}
          audioEle={current_audio}
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
        /> : <div></div>}
      <Feed />
    </PlayerWrap>
  );
}

export default Player;
