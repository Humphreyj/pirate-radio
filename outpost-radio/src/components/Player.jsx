import React from 'react';
import styled from 'styled-components';
import Time from './Time';

const Player = () => {

    const PlayerWrap = styled.div`
    width: 100%;
    padding: 2%;
    border: 1px solid rgba(140, 140, 134, .9);
    border-radius: 8px;
    
    
    
    margin: 2em auto;
    background-color: black;
    h3 {
        color: white;
        width: 20%;
    }
    iframe {
        
        color: red;
        background-color: rgba(129, 178, 60, .3);
        
        padding: 2%;
        border: 0;
        
    }
    
    @media(min-width: 800px) {
        width: 30em;
    }
    
    `

    
    return (
        <div>
            <PlayerWrap>
                <h3>/Outpost_Radio/</h3>
                <Time/>
                {/* <ReactPlayer 
                url='https:\/\/sync.outpost.radio\/radio\/8000\/radio.mp3?1576106012' 
                playing
                controls={true}
                display= 'inline-block'
                width= '80%'
                
                 /> */}

<iframe title='playa' src="https://sync.outpost.radio/public/comms/embed"  allowtransparency="true"></iframe>
  }
                
            </PlayerWrap>
            
        </div>
    );
}

export default Player;
