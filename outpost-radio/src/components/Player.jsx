import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Player = () => {

    const PlayerWrap = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 2em auto;
    background-color: black;
    h3 {
        color: white;
        width: 20%;
    }
    audio {
        
    }
    
    
    `
    return (
        <div>
            <PlayerWrap>
                <h3>/Outpost Radio/</h3>
                <ReactPlayer 
                url='https:\/\/sync.outpost.radio\/radio\/8000\/radio.mp3?1576106012' 
                playing
                controls={true}
                display= 'inline-block'
                width= '80%'
                
                 />
  }
                
            </PlayerWrap>
            
        </div>
    );
}

export default Player;
