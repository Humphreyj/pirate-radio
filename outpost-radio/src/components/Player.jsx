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
    
    @media (max-width: ${screen.lg - 1}px) {
      border-right: none;
    }

    h3 {
      color: white;
      width: 20%;
    }
    
   
    
    
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
    width: 100%;
    

    img {
      width: 50%;
      @media (max-width: ${screen.md}px) {
        margin: 0 auto;
        width: 70%;
      }
      @media (min-width: ${screen.xxl}px) {
        margin: 0 auto;
        width: 50%;
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
