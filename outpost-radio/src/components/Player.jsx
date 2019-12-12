import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Player = () => {

    const PlayerWrap = styled.div`
    width: 50%;
    height: 15em;
    margin: 2em auto;
    background-color: black;
    h3 {
        color: white;
        width: 20%;
    }
    
    `
    return (
        <div>
            <PlayerWrap>
                <h3>/Outpost Radio/</h3>
                <ReactPlayer 
                url='https:\/\/sync.outpost.radio\/radio\/8000\/radio.mp3?1576106012' 
                playing
                controls={true} />
  }
                
            </PlayerWrap>
            
        </div>
    );
}

export default Player;
