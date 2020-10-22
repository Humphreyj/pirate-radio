import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
// import AudioSpectrum from 'react-audio-spectrum';
import 'react-h5-audio-player/lib/styles.css';

import { 
  color,
  screen, 
} from '../util';

const CustomAudioPlayer = (props) => {
  // let screenWidth = window.screen.width;
  // let playerWidth = 200
  // if (screenWidth < 766) {
  //   playerWidth = 275
  // }else {
  //   playerWidth = 550
  // }
  
  let station = props.state
  const [stream,setStream] = useState(false)
  useEffect(() => {
    if(station.listeners) {
      setStream(true)
      console.log(station.now_playing.song)
    }
  },[station])
    return (
      <>
        {
          stream ? 
          <CustomPlayer className="custom-player">
            <div className="song-info">
                <h1 className="song-title">{station.now_playing.song.text}</h1>
            </div>
          <AudioPlayer
          src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020"
          className="player"
          autoPlay
          customAdditionalControls= {[]}
          />
          <h4 className="listeners">Listening Now: {station.listeners.current} </h4> 
          {/* <AudioSpectrum
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
            /> */}
        
        </CustomPlayer> : <h1 className="loading">Loading</h1>
        }

        
      </>
        
    );
}
const mapStateToProps = (state) => {
  return {
      state: state.data
  }
}
const CustomPlayer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:  0 1rem;
    color: ${color.whitish};
    

    img {
      width: 80%;
      @media (max-width: ${screen.md}px) {
        margin: 0 auto;
        width: 100%;
      }
    }
  `;

export default connect(mapStateToProps)(CustomAudioPlayer);
