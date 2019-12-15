import React from 'react';
import styled from 'styled-components';



const header = () => {

    const Trial = styled.p`
    font-family: 'Odibee Sans', cursive;
    color: rgba(255,255,255, .4);
    margin-top: -1px;
    text-align: center;
    
    `
   

    return (
        <div>
            <Trial>SCR_RadioConsole v1.6a Trial ‘Expired’</Trial>
        </div>
    );
}

export default header;
