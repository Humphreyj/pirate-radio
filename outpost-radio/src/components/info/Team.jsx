import React from 'react';
import styled from 'styled-components';
import { screen } from '../../util';

const teamTitles = {
  'Alibyte': 'Station Director',
  'BloodEagle': 'Executive Producer',
  '': '',
};

const team = {
  admin: [
    'Alibyte', 
    'BloodEagle', 
  ],
  artist: [
    'Harpur'

  ],
  voice: [
    'BloodEagle',
    'M_James',
    'Bear',
    'Gido',
    'Locke',
  ],
  musician: [

  ],
  writers: [
    '-tkn-',
    'Capt_Ricven',
    'Mookie Merkk',
    'Paradox Obscuris',
    'Pariziel',
  ],
  devs: [
    'Rosseyn',
    'Varian_Halai'
  ],
}

const Team = () => {
  const TeamWrap =  styled.div`
    height: 16rem;
    overflow-y: scroll;
    padding: 0 .5rem;
    width: 100%;
    font-family: 'Press Start 2P', cursive;

    ul {
      list-style: none;

      li {
        padding: .25rem;
      }
    }
    .department {
      width: 100%;
      h4 {
        text-decoration: underline;
        font-family: inherit;
        text-align: center;
      }
      
      div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        p {
          margin: .5em 1em;
        }
      }
    }

    @media (min-width: ${screen.md}px) {
      width: 100%;
      // margin: 0 auto;
    }
  `;

  return (
    <TeamWrap>
      {team.admin.map(admin => 
        teamTitles[admin] ? <p>{teamTitles[admin]}: {admin}</p> : '')}
      
      <div className="voice-actors department">
        <h4>Voice Actors</h4>
        <div>
        {team.voice.map(voice => <p>{voice}</p>)}
        </div>
      </div>

      <div className="writers department">
        <h4>Writers</h4>
        <div>
          {team.writers.map(writer => <p>{writer}</p> )}
        </div>
      </div>
      <div className="devs department">
        <h4>Developers</h4>
        <div>
          {team.devs.map(dev => <p>{dev}</p> )}
        </div>
      </div>
      
      

    </TeamWrap>
  );
};

export default Team;
