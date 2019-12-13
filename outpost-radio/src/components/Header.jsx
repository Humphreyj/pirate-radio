import React from 'react';
import styled from 'styled-components';
import bannerLogo from '../img/outpost-banner.png';


const header = () => {

    const Trial = styled.p`
    font-family: 'Odibee Sans', cursive;
    color: rgba(255,255,255, .4);
    margin-top: -1px;
    
    `
    const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    padding:  0% 3%;
    margin-top: -1em;
    font-family: 'Tomorrow', sans-serif;
    background-color: rgba(140, 140, 134, .3);
    color: rgba(255,255,255, .9);

    img {
        width: 25%;
    }
    h4 {
        font-size: 1.1em;
        @media(min-width: 800px) {
            font-size: 2em;
        }
    }
    `

    return (
        <div>
            <Trial>SCR_RadioConsole v1.6a Trial ‘Expired’</Trial>
            <Banner>
                <img src={bannerLogo} alt="outpost radio logo"/>
                <div>
                <h4>Voice Of </h4>
                <h4>The High Frontier</h4>
                </div>
                
            </Banner>

            
        </div>
    );
}

export default header;
