import React,{useState,useEffect,useRef} from 'react';
import {connect,useDispatch} from 'react-redux';
import {getSongInfo} from '../Redux/actions';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import {useInterval} from '../util';

import AudioSpectrum from 'react-audio-spectrum';
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
  const dispatch = useDispatch()
  
  
  let station = props.state
  let player = ''
  player= useRef(player)
  const [stream,setStream] = useState(false)
  const [delay, setDelay] = useState(60000)
  const [currentAudio, setCurrentAudio]=useState();
  useEffect(() => {
    if(station.listeners) {
      
      setStream(true)
      setDelay(station.now_playing.remaining * 1000)
      console.log(station.now_playing.remaining )
    }else {
      setDelay(10000)
    }
    console.log(currentAudio)
    // eslint-disable-next-line
  },[station])
  
  useInterval(() => {
    dispatch(getSongInfo())
  }, delay || 15000);

  
    return (
      <>
        {
          stream ? 
          <CustomPlayer className="custom-player">
            <div className="song-info">
                <p className="song-title">{station.now_playing.song.title}</p>
                <p className="song-artist">By: {station.now_playing.song.artist}</p>

            </div>
          <AudioPlayer
          src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020"
          className="player"
          autoPlay
          volume={.6}
          ref={player}
          customAdditionalControls= {[]}
          onPlay={() => setCurrentAudio(player.current.audio.current)}
          />
          <h4 className="listeners">Listening Now: {station.listeners.current} </h4>
          <audio autoPlay id='hidden' volume='0' src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020"></audio>
           <AudioSpectrum
            id="audio-canvas"
            height={200}
            width={200}
            audioId={'hidden'}
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
    width: 100%;

    .rhap-container {
      width: 100%;
    }
    

    img {
      width: 80%;
      @media (max-width: ${screen.md}px) {
        margin: 0 auto;
        width: 100%;
      }
    }
  `;

export default connect(mapStateToProps)(CustomAudioPlayer);
