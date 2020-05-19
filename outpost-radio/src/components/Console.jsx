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

  // const getReturn = () => {
  //   if(inputText.content==='SPCBSTRDS') {
  //     updateInputText({...inputText,return: inputText.return = 'The Space Bastards are group of law abiding traders and salvagers.'});
  //     window.open('https://robertsspaceindustries.com/orgs/SPCBSTRDS','_blank');
  //   }
  //   if(inputText.content==='info Alibyte') {
  //     updateInputText({...inputText,return: inputText.return = 'Alibyte is the founder and director of Outpost Radio.'});
  //   }
  //   if(inputText.content==='info BloodEagle') {
  //     updateInputText({...inputText,return: inputText.return = 'Blood Eagle is the Executive Producer of Outpost Radio.'});
  //   }
  // }

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     getReturn();
  //     updateInputText({...inputText,content: inputText.content = ''});
  //   }
  // }

  // const changeHandler = (event) => {
  //   updateInputText({...inputText,content: inputText.content = event.target.value});
  //   console.log(inputText.content);
  // }

  const showMsg = () => 'Hello World';

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
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: showMsg,
          'SPCBST': () => bastards() ,
          popup: () => alert('Terminal in React'),
          'info-alibyte': () => 'Alibyte is the station director.',
        }}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          popup: 'alert',
          alert: 'alert', 
        }}
        hideTopBar={true}
        msg='Get Started...'
        startState='maximised'
        style={{ fontWeight: "bold", fontSize: "1rem", height: terminalHeight, width: '100%' }}
      />
          
      {/* 
      <Input
        type='text'
        placeholder='ready...'
        value={inputText.content}
        onChange={changeHandler}
        onKeyPress={handleKeyPress} 
      />
      
      <p>{inputText.return}</p>
      */}
    </InputWrap>
  );

}

export default Console;
