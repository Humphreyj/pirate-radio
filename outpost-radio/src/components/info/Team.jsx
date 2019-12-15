import React from 'react';
import styled from 'styled-components';

const Team = () => {

    const TeamWrap =  styled.div`
    border: 1px solid black;
    overflow-y: scroll;
    height: 10em;
    box-sizing: content-box;
    width: 100%;

    ul {
        list-style: none;

        li {
            padding: .25em;
        }
    }
    @media(min-width: 800px) {
        width: 100%;
        height: 15em;
        margin: 0 auto;
    }

    `
    return (
        <TeamWrap>
            <p>Station Director: Alibyte</p>
            <p>Executive Producer: BloodEagle</p>
            <h6>Artist</h6>
            <p>Harpur</p>
            
            {/* <ul>Voice Actors:
                <li>BloodEagle</li>
                <li>M_James</li>
                <li>Bear</li>
                <li>Gido</li>
                <li>Locke</li>
            </ul>
            <ul>Writers:
                <li>-tkn-</li>
                <li>Capt_Ricven</li>
                <li>Mookie Merkk</li>
                <li>Paradox Obscuris</li>
                <li>Pariziel</li>
            </ul>
            <ul>Developers:
                <li>firejar710</li>
                <li>Rosseyn</li>
                <li>Varian_Halai</li>
            </ul> */}
        </TeamWrap>
    );
}

export default Team;
