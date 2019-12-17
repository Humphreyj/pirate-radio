import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';


const Input = styled.textarea`
width: 99%;
margin: 0 auto;
height: 7em;
background-color: #111;
color: rgba(255,255,255, .9);
margin-top: .5%;
margin-bottom: 2em;
@media(min-width: 1000px) {
    width: 100%;
    height: 15em;
    margin-bottom: 0em;
}
`

const Console = () => {

    const [inputText, updateInputText] = useState({
        content: ''
    })

   


    const changeHandler = (event) => {
    updateInputText({...inputText,content: inputText.content = event.target.value})
    console.log(inputText.content)
    }
    

    return (
        <div>
            <Input
            type='text'
            value={inputText.content}
            onChange={changeHandler} />
            
        </div>
    );
}

export default Console;
