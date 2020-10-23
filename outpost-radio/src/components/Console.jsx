// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';

import { 
  color, 
  screen, 
} from '../util';


const InputWrap = styled.div`
  border-top: 2px dashed white;
  position: absolute;
  top: 70%;
  margin: 0 auto;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  p {
    color: ${color.whitish};
  }
  

  @media (max-width: ${screen.md}px) {
    margin: 0 auto;
    width: 80%;
    position: static;
    
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
        style={{ fontWeight: "bold", fontSize: "1rem", height: "25em",margin:'0 auto',fontFamily:'Topaz',pointerEvents:'auto',width:"100%",overflowX:"hidden" }}
      />
    
    </InputWrap>
  );

}

export default Console;
