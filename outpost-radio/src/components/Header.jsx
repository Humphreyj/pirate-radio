import React from 'react';
import styled from 'styled-components';


const header = () => {

    const Trial = styled.p`
    font-family: 'Odibee Sans', cursive;
    color: white;
    `
    const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    padding:  0% 3%;
    font-family: 'Tomorrow', sans-serif;
    background-color: rgba(196,196,196, .3);
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
