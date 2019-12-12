import React from 'react';
import styled from 'styled-components';


const header = () => {

    const Trial = styled.p`
    font-family: 'Odibee Sans', cursive;
    color: rgba(255,255,255, .4);
    padding-bottom: 1%;
    
    `
    const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    padding:  0% 3%;
    margin-top: -1em;
    font-family: 'Tomorrow', sans-serif;
    background-color: rgba(140, 140, 134, .3);
    color: rgba(255,255,255, .9);
    `

    return (
        <div>
            <Trial>SCR_RadioConsole v1.6a Trial ‘Expired’</Trial>
            <Banner>
                <h3>Outpost Radio</h3>
                <h4>Voice Of The High Frontier</h4>
            </Banner>

            
        </div>
    );
}

export default header;
