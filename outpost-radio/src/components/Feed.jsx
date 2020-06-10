import React from 'react';
import styled from 'styled-components';
import { color } from '../util';

const Feed = () => {
  const FeedWrap = styled.div`
    background-color: ${color.lightBlackish};
    color: ${color.whitish};
    grid-area: feed;
    margin-top: 1rem;
    // padding:  3rem 1rem 0;
    text-align: center;
  `;

  return (
    <FeedWrap>we can put news segments written here if people want to make blog posts or something, like Galnet from Elite. <br></br> Todo: make dashed bar surround whole page and between segments; change console font to Topaz (put blinking box where input is, if possible) + remove scrollbar at bottom of console, change radio to match ascii look, add full team page-- that should be it!! :) </FeedWrap>
  );
}

export default Feed;
