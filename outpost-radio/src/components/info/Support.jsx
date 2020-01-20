import React from 'react';
import styled from 'styled-components';
import { 
  color, 
  screen, 
} from '../../util';

const Support = () => {
  const SupportWrap = styled.div`
    overflow-y: scroll;
    width: 100%;

    a {
      text-decoration: none;
      color: ${color.whitish};
      padding-top: 1rem;
    }

    span { cursor: pointer; }

    @media (min-width: ${screen.md}px) {
        width: 100%;
        margin: 0 auto;
        overflow-y: auto;
        box-sizing: border-box;
    }
  `;

  return (
    <SupportWrap>
      <h4>Your Support Makes a Difference.</h4>
      <p>Thanks for supporting Outpost Radio, The Voice of the High Frontier. When you give to Outpost Radio, you make the local, regional and international independent journalism and music that you can only get from pirate radio possible.</p>
      {/* <a href="#"><i className="fab fa-patreon fa-3x"></i></a> */}
      <span><i className="fab fa-patreon fa-3x"></i></span>
    </SupportWrap>
  );
};

export default Support;
