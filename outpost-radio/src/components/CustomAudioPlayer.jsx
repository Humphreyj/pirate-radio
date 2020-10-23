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
  useEffect(() => {
    if(station.listeners) {
      
      setStream(true)
      setDelay(station.now_playing.remaining * 1000)
      console.log(station.now_playing.song )
    }
    
    // eslint-disable-next-line
  },[station])
  
  useInterval(() => {
    dispatch(getSongInfo())
  }, delay || 20000);

  
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
              </div>
                

            </div>
          <AudioPlayer
          src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020"
          className="player"
          autoPlay
          volume={.6}
          showSkipControls={false}
          showJumpControls={false}
          customProgressBarSection={
            [
              
            ]
          }
          ref={player}
          customAdditionalControls= {[]}
          />
          <h4 className="listeners">Listening Now: {station.listeners.current} </h4>
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
    width: 80%;
    @media (max-width: ${screen.md}px) {
      
      width: 100%;
    }

    .song-info {
      background-color: black;
      width: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
        margin-right: 15px;
        border: 1px solid white;
      }
    }

    .rhap_container {
      width: 50%;
      background-color: black;
      color: ${color.whitish};
      button {
        margin-right: 40px;
        width: 100%;
      }
      
      
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
