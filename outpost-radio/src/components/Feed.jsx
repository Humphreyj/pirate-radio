import React from 'react';
import styled from 'styled-components';
import { color,screen } from '../util';

const Feed = () => {
  const FeedWrap = styled.div`
    display: flex;
    width: 100%;
    margin-top: 60px;
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

    @media (max-width: ${screen.md}px) {
      margin: 20px auto;
      width: 100%;
    }
  `;

  return (
    <FeedWrap>
      <p>we can put news segments written here if people want to make blog posts or something, like Galnet from Elite.</p>
       </FeedWrap>
  );
}

export default Feed;
