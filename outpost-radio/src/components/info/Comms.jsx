import React from 'react';
import styled from 'styled-components';

import { 
  color, 
  screen, 
} from '../../util';


const CommsWrap = styled.div`
  overflow-y: scroll;
  width: 100%;
  

  a {
    color: ${color.whitish};
    text-decoration: none;
    padding-top: 1rem;
  }

  h5 {
    width: 100%;
    font-family: 'Topaz', monospace;
  }

  @media (min-width: ${screen.md}px) {
    box-sizing: border-box;
    margin: 0 auto;
    overflow-y: auto;
    width: 100%;
  }
`;

const Comms = () => {
  return (
    <CommsWrap>
      <h5>Changelog: 6-10-2950 <br></br>
	  * Changed fonts <br></br>
	  * Added info text<br></br>
	  * Minor fixes<br></br>
	  * Changed logo </h5>
    </CommsWrap>
  );
};

export default Comms;
