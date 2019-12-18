import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';

const InputWrap = styled.div`
display: flex;
justify-content: center;
width: 99%;
margin: 0 auto;
height: 7em;
margin-top: .5%;
margin-bottom: 2em;
@media(min-width: 1000px) {
    width: 100%;
    height: 15em;
    margin-bottom: 0em;
}
p {
    color: rgba(255,255,255, .9);
}

.term {
    height: 2em;
}

`
const Input = styled.input`
width: 99%;
margin: 0 auto;
background-color: #111;
color: rgba(255,255,255, .9);

`

const Console = () => {

    const [inputText, updateInputText] = useState({
        content: '',
        return: ''
    })

    const getReturn = () => {
        if(inputText.content==='SPCBSTRDS') {
            updateInputText({...inputText,return: inputText.return = 'The Space Bastards are group of law abiding traders and salvagers.'})
            window.open('https://robertsspaceindustries.com/orgs/SPCBSTRDS','_blank')
        }
        if(inputText.content==='info Alibyte') {
            updateInputText({...inputText,return: inputText.return = 'Alibyte is the founder and director of Outpost Radio.'}) 
        }
        if(inputText.content==='info BloodEagle') {
            updateInputText({...inputText,return: inputText.return = 'Blood Eagle is the Executive Producer of Outpost Radio.'}) 
        }
        
    }

   

   const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
           getReturn();
            updateInputText({...inputText,content: inputText.content = ''})
        }
      }


    const changeHandler = (event) => {
    updateInputText({...inputText,content: inputText.content = event.target.value})
    console.log(inputText.content)
    }

    const showMsg = () => 'Hello World'

    const bastards = () => {
        window.open('https://robertsspaceindustries.com/orgs/SPCBSTRDS','_blank');

        return 'The Space Bastards are a legitimate group of traders and salvagers.'

    }
    

    return (
        <InputWrap>
            {/* <Input
            type='text'
            placeholder='ready...'
            value={inputText.content}
            onChange={changeHandler}
            onKeyPress={handleKeyPress} />
            
            <p>{inputText.return}</p> */}

<Terminal className='term'
          color='red'
          backgroundColor='black'
          barColor='black'
          hideTopBar='true'
          allowTabs='false'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em", height:'13em',width: '100%' }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: showMsg,
            'SPCBST': () => bastards() ,
            popup: () => alert('Terminal in React'),
            'info-alibyte': () => 'Alibyte is the station director.'
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='Get Started...'
        />
            
        </InputWrap>
    );
}

export default Console;
