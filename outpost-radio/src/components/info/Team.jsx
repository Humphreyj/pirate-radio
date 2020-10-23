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
  ::-webkit-scrollbar {
    width: 1px;
  }
    
    padding-bottom: 20px;

    width: 100%;
    height: 30em;
    overflow-y: scroll;
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
      width: 80%;
      display: flex;
    flex-direction: column;
    align-items: center;
      .department-title {
        font-size: 2em;
        text-align: center;
        @media (max-width: ${screen.sm}px) {
          width: 100%;
    
        }
      }
      
      div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        

        .team-member {
          margin: .5em ;
          width: 25%
          font-size: 1.7em;
          @media (max-width: ${screen.sm}px) {
            fonst-size: 1.4em;
            margin: 10px 0;
            width: 50%;
      
          }
        }
      }
    }

    @media (max-width: ${screen.md}px) {
      width: 100%;
      height: 30em;

    }
    @media (min-width: ${screen.xxl}px) {
      height: 50em;
      padding: 20px;

    }
  `;


  return (
    <TeamWrap>
      <div className="department admin">
      {team.admin.map(admin => 
        teamTitles[admin] ? <p>{teamTitles[admin]}: {admin}</p> : '')}
      </div>
      
      
      <div className="voice-actors department">
        <h4 className='department-title'>Voice Actors</h4>
        <div>
        {team.voice.map(voice => <p className='team-member'>{voice}</p>)}
        </div>
      </div>

      <div className="writers department">
        <h4 className='department-title'>Writers</h4>
        <div>
          {team.writers.map(writer => <p className='team-member'>{writer}</p> )}
        </div>
      </div>
      <div className="devs department">
        <h4 className='department-title'>Developers</h4>
        <div>
          {team.devs.map(dev => <p className='team-member'>{dev}</p> )}
        </div>
      </div>
      
      

    </TeamWrap>
  );
};


export default Team;
