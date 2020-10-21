import React from 'react';
import styled from 'styled-components';
import Time from '../Time';
// import { screen } from '../../util';

const Home = () => {
  const HomeWrap =  styled.div`

  p {
    font-family: 'Topaz', monospace;
    line-height: 1.3em;
    font-size: 1.5em;
  }
  `;

  return (
    <HomeWrap>
      <Time />
      <p>Outpost Radio, voice of the high frontier. We work hard every day to get you the music and news you need out in the black. <br></br><br></br> Fly safe.</p>
    </HomeWrap>
  );
}

export default Home;
