import React from 'react';
import styled from 'styled-components';
import { screen } from '../../util';

const teamTitles = {
  'alibyte': 'Station Head',
  'BloodEagle': 'Executive Producer',
  '': '',
};

const team = {
  admin: [
    'alibyte', 
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
	'Lemado',
	'SpecialK'

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
    padding: 0 ;

    width: 100%;
    font-family: 'Topaz', monospace;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    


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
        

        p {
          margin: .5em ;
          width: 80%
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
      <div className="department admin">
      {team.admin.map(admin => 
        teamTitles[admin] ? <p>{teamTitles[admin]}: {admin}</p> : '')}
      </div>
      
      
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
