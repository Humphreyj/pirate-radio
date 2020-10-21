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
    font-family: 'Topaz', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
      color: ${color.whitish};
      padding-top: 1rem;
    }

    span { 

      cursor: pointer;
     }

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
      <p>Supporting Outpost Radio supports pilots everywhere. Every UEC donated goes to server costs, ship giveaways, and back to the community. Outpost is strictly not for profit. We are the radio of the people, and we will keep it that way.</p>
      {/* <a href="#"><i className="fab fa-patreon fa-3x"></i></a> */}
      <span><i className="fab fa-patreon fa-3x"></i></span>
    </SupportWrap>
  );
};

export default Support;
