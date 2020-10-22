import React from 'react';
import {connect} from "react-redux"
import styled from 'styled-components';
import Feed from './Feed';

import CustomAudioPayer from './CustomAudioPlayer';
import { 
  color,
  screen, 
} from '../util';
import bannerLogo from '../img/outpost-banner.png';


const Player = (props) => {
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

//  let screenWidth = window.screen.width;
//  let playerWidth = 200
//  if (screenWidth < 766) {
//    playerWidth = 275
//  }else {
//    playerWidth = 550
//  }
//  let player = createRef()
 
//  player = useRef(player)
 

 
 
 
 
 
  

  
  
  return (
    <PlayerWrap>
      <Banner>
        <img src={bannerLogo} alt="outpost radio logo" />
      </Banner>
      <CustomAudioPayer /> 
    
   
      
        
      <Feed />
    </PlayerWrap>
  );
}
const mapStateToProps = (state) => {
  return {
      state: state.data
  }
}

export default connect(mapStateToProps)(Player);
