import React from 'react';
import styled from 'styled-components';
import { color } from '../util';

const Feed = () => {
  const FeedWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items:center;
    background-color: ${color.lightBlackish};
    color: ${color.whitish};
    
    
    text-align: center;
    p {
      font-size: 2em;
      width: 90%;
      @media(max-width: 1200px) {
        font-size: 1em;
      }
    }
  `;

  return (
    <FeedWrap>
      <p>we can put news segments written here if people want to make blog posts or something, like Galnet from Elite.</p>
       </FeedWrap>
  );
}

export default Feed;
