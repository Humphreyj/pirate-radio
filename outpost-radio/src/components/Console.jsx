import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';

const InputWrap = styled.div`
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
    

    return (
        <InputWrap>
            <Input
            type='text'
            placeholder='ready...'
            value={inputText.content}
            onChange={changeHandler}
            onKeyPress={handleKeyPress} />
            
            <p>{inputText.return}</p>
            
        </InputWrap>
    );
}

export default Console;
