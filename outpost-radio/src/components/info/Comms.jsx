import React from 'react';
import styled from 'styled-components';
const CommsWrap = styled.div`
overflow-y: scroll;
height: 10em;
width: 100%;
box-sizing: content-box;


a {
    text-decoration: none;
    color: rgba(255,255,255, .9);
    padding-top: 1em;
    
}

h5 {
    width: 100%;
}
@media(min-width: 800px) {
    width: 100%;
    height: 15em;
    margin: 0 auto;
    overflow-y: auto;
    box-sizing: border-box;
    
}
`


const Comms = () => {
    return (
        <CommsWrap>
            <h5>Stay Tuned for updates!</h5>
        </CommsWrap>
    );
}

export default Comms;
