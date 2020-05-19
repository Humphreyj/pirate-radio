import React from 'react';
import styled from 'styled-components';
import Time from '../Time';
// import { screen } from '../../util';

const Home = () => {
  const HomeWrap =  styled.div`
  `;

  return (
    <HomeWrap>
      <Time />
      <p>Space is Lonely, but you don't have to be. Outpost Radio will be here 24/7 as you make your way through the vast universe. From Stanton to Terra, we'll be here. Outpost Radio, the Voice of the High Frontier.</p>
    </HomeWrap>
  );
}

export default Home;
