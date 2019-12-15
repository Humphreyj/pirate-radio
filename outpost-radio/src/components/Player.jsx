import React from 'react';
import styled from 'styled-components';
import bannerLogo from '../img/outpost-banner.png';


const Player = () => {

    const PlayerWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 30em;
    padding: 3%;

    
    
    
    margin: 2em auto;
    background-color: black;
    h3 {
        color: white;
        width: 20%;
    }
    iframe {
        
        color: red;
        background-color: rgba(129, 178, 60, .3);
        margin: 0 auto;
        padding: 2%;
        border: 0;
        
    }
    
    @media(min-width: 800px) {
        width: 35em;
        height: 30em;
    }
    
    `
    const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding:  0% 3%;
    margin-top: -1em;
    

    img {
        width: 50%;
        @media(min-width: 800px) {
            width: 60%;
            margin: 0 auto;
        }
    }

    .trialWrap {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 99%;
        margin: 0 auto;
    }
    `

    const Trial = styled.p`
    font-family: 'Odibee Sans', cursive;
    color: rgba(255,255,255, .4);
    margin-top: -1px;
    text-align: center;
    
    `
    

    
    return (
        <div>
            <PlayerWrap>
                
                <Banner>
                <img src={bannerLogo} alt="outpost radio logo"/>
                <div className="trialWrap">
                    <Trial>starSTRM v1.9.4a /unlicensed copy*/</Trial>
                </div>
                
            </Banner>
               

<iframe title='playa' src="https://sync.outpost.radio/public/comms/embed" width='96%' margin='0 auto'  allowtransparency="true"></iframe>
  }
                
            </PlayerWrap>
            
        </div>
    );
}

export default Player;
