// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';
import { 
  color, 
  screen, 
} from '../util';

const terminalHeight = '15rem';
const InputWrap = styled.div`

  grid-area: console;
  max-height: ${terminalHeight};
  margin: 0 auto;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden

  p {
    color: ${color.whitish};
  }
  

  @media (min-width: ${screen.md}px) {
    // height: 15rem;
    margin: 0 auto;
    width: 80%;
  }
`;



const Console = () => {


  // const [inputText, updateInputText] = useState({
  //   content: '',
  //   return: '',
  // });



  const showMsg = () => 'Thank you for listening to Outpost Radio!';

  const bastards = () => {
    window.open('https://robertsspaceindustries.com/orgs/SPCBSTRDS','_blank');
    return 'The Space Bastards are a legitimate group of traders and salvagers.';
  };

  return (
    <InputWrap>
      <Terminal 
        allowTabs={false}
        backgroundColor='black'
        barColor='black'
        className='term'
        color='green'
        commands={{
          show_msg: showMsg,
          'SPCBST': () => bastards() ,
          get_station_info: ()=> 'Outpost Radio was founded by Alibyte and BloodEagle in 2949',
          
          
        }}
        descriptions={{
          get_station_info: 'Displays info about the station.',
        }}
        hideTopBar={true}
        msg='starSTRM console v1.9.4.a'
        startState='maximised'
        style={{ fontWeight: "bold", fontSize: "1rem", height: terminalHeight,margin:'0 auto',fontFamily:'Topaz',pointerEvents:'auto',width:"100%",overflowX:"hidden" }}
      />
    </InputWrap>
  );

}

export default Console;
