import React from 'react';
import styled from 'styled-components';
import { color } from '../util';

const Feed = () => {
  const FeedWrap = styled.div`
    background-color: black;
    color: ${color.whitish};
    margin-top: 1rem;
    padding:  3rem 1rem 0;
    text-align: center;
  `;

  return (
    <FeedWrap>Twitter Feed?</FeedWrap>
  );
}

export default Feed;
