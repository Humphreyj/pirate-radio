import React,{useState,useEffect,useRef} from 'react';
import {connect,useDispatch} from 'react-redux';
import {getSongInfo} from '../Redux/actions';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import {useInterval} from '../util';
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
  const [volume, setVolume] = useState(.05)

  
  
  const change_volume = (e) => {
      setVolume(e.target.volume)
      localStorage.setItem('volume', volume)
  }
  
  useEffect(() => {
    if(station.listeners) {
      setStream(true)
      setDelay(station.now_playing.remaining * 1000)
    }
    let saved_volume = localStorage.getItem('volume')
    if(saved_volume) {
      setVolume(saved_volume)
    }
    
    // eslint-disable-next-line
  },[station])
  
  useInterval(() => {
    dispatch(getSongInfo())
  }, delay || 30000);
  
    return (
      <>
        {
          stream ? 
          <CustomPlayer className="custom-player">
            <div className="song-info">
              <img src={station.now_playing.song.art} alt={`Album art for ${station.now_playing.song.album}`}/>
              <div className="title-and-artist">
                <p className="now-playing">Now Playing:</p>
                <p className="song-title">{station.now_playing.song.title}</p>
                <p className="song-artist">By: {station.now_playing.song.artist}</p>
                <p className="listeners">Listeners: {station.listeners.current} </p>
              </div>
            </div>

          <AudioPlayer
          src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020"
          className="player"
          autoPlay
          volume={volume}
          showSkipControls={false}
          showJumpControls={false}
          customProgressBarSection={
            []
          }
          ref={player}
          customAdditionalControls= {[]}
          onVolumeChange={change_volume}
          />
          
        </CustomPlayer> : <div className="player-loading"><h1 className="loading">Loading</h1></div> 
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
    background-color: black;
    color: ${color.whitish};
    width: 100%;
    border-top: 2px dashed white;
    border-bottom: 2px dashed white;
    @media (max-width: ${screen.md}px) {
      
      width: 100%;
    }

    .song-info {
      background-color: black;
      width: 55%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin: 20px 0;
        font-size: 1.4em;
        @media (max-width: ${screen.sm}px) {
          font-size: 1em;
        }
      }
      img {
        width: 50%;
        margin-right: 15px;
        @media (max-width: ${screen.md}px) {
          margin-right: 15px;
          width: 50%;
        }
      }
      
    }

    .rhap_container {
      width: 50%;
      background-color: black;
      color: ${color.whitish};
      button {
        margin-right: 40px;
        
      }
      
      
    }
    

    
  `;

export default connect(mapStateToProps)(CustomAudioPlayer);
