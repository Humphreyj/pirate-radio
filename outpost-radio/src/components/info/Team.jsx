import React from 'react';
import styled from 'styled-components';

const Team = () => {

    const TeamWrap =  styled.div`
    overflow-y: scroll;
    white-space: no-wrap;
    height: 10em;
    width: 100%;
    padding-right: 30%;
    scrollbar-width: none;
    


    .team-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            display: flex; 
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            margin: 0 auto;

        }
    }

    
    @media(min-width: 1000px) {
        width: 100%;
        height: 15em;
        margin: 0 auto;
    }

    `
    return (
        <TeamWrap>
            <div className='directors team-group'>
                <p>Station Director: Alibyte</p>
                <p>Executive Producer: BloodEagle</p>
            </div>

            <div className="artists team-group">
                <h4>Artists</h4>
                <div>
                    <p>Harpur</p>
                </div>
            </div>

            <div className="voice-actors team-group">
                <h4>Voice Actors</h4>
                <div>
                    <p>BloodEagle</p>
                    <p>M_James</p>
                    <p>Bear</p>
                    <p>Gido</p>
                    <p>Locke</p>
                </div>
            </div>

            <div className="writers team-group">
                <h4>Writers</h4>
                <div>
                    <p>-tkn-</p>
                    <p>Capt_Ricven</p>
                    <p>Mookie Merkk</p>
                    <p>Paradox Obscuris</p>
                    <p>Pariziel</p>
                </div>
            </div>

            <div className="developers team-group">
                <h4>Developers</h4>
                <div>
                    <p>firejar710</p>
                    <p>Rosseyn</p>
                    <p>Varian_Halai</p>
                </div>
            </div>
            
            
            
     
        </TeamWrap>
    );
}

export default Team;
