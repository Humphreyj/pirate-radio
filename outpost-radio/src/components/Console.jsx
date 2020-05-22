// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';
import { 
  color, 
  screen, 
} from '../util';

const terminalHeight = '13rem';
const InputWrap = styled.div`
  grid-area: console;
  max-height: ${terminalHeight};
  margin: 0 auto 2rem;
  overflow-y: hidden;
  width: 100%;

  p {
    color: ${color.whitish};
  }

  .term {
    height: 2rem;
  }

  @media (min-width: ${screen.md}px) {
    // height: 15rem;
    margin-bottom: 0;
    width: 100%;
  }
`;

// const Input = styled.input`
//   color: ${color.whitish};
//   background-color: #111;
//   margin: 0 auto;
//   width: 99%;
// `;

const Console = () => {


  // const [inputText, updateInputText] = useState({
  //   content: '',
  //   return: '',
  // });



  const showMsg = () => 'Thank you for listening to Outpost radio!';

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
        color='red'
        commands={{
          show_msg: showMsg,
          'SPCBST': () => bastards() ,
          get_station_info: ()=> 'Outpost Radio was founded by Alibyte and BloodEagle in 2949',
          
          
        }}
        descriptions={{
          get_station_info: 'Displays info about the station.',

        
        }}
        hideTopBar={true}
        msg='Get Started... type help for help'
        startState='maximised'
        style={{ fontWeight: "bold", fontSize: "1rem", height: terminalHeight, width: '100%' }}
      />
    </InputWrap>
  );

}

export default Console;
