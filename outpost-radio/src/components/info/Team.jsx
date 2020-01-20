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
  writer: [
    '-tkn-',
    'Capt_Ricven',
    'Mookie Merkk',
    'Paradox Obscuris',
    'Pariziel',
  ],
  devs: [

  ],
}

const Team = () => {
  const TeamWrap =  styled.div`
    height: 10rem;
    overflow-y: scroll;
    padding: 0 .5rem;
    width: 100%;

    ul {
      list-style: none;

      li {
        padding: .25rem;
      }
    }

    @media (min-width: ${screen.md}px) {
      width: 100%;
      // margin: 0 auto;
    }
  `;

  return (
    <TeamWrap>
      {team.admin.forEach(admin => 
        teamTitles[admin] ? `<p>{teamTitles[admin]}: {admin}</p>` : '')}
      {Object.values(team).forEach(t => 
        t.forEach(member => <p>{member}</p>)
      )}

      {/* <p>Station Director: Alibyte</p>
      <p>Executive Producer: BloodEagle</p> */}
      <h6>Artist</h6>
      <p>Harpur</p>
      
      {
      /* 
      <ul>Voice Actors:
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
      </ul> 
      */
      }
    </TeamWrap>
  );
};

export default Team;
