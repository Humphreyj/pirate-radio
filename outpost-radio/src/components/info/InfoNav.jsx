import React from 'react';
// import Dropdown from 'react-dropdown';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import 'react-dropdown/style.css';
import { 
  color, 
  screen, 
} from '../../util';

const InfoNav = () => {
  const InfoNav = styled.nav`
    align-items: center;
    border: 2px solid ${color.whitish};
    display: grid;
    grid-auto-flow: column;
    grid-area: nav;
    grid-gap: 1rem;
    justify-content: start;
    
    a {
      color: white;
      height: 100%;
      line-height: 100%;
      padding: .25rem .5rem;
      text-decoration: none;
      font-family: 'Press Start 2P', cursive;
      font-size: 1em;

      &.active, &:hover {
        background-color: ${color.whitish};
        color: ${color.blackish};
      }
    }

    @media (min-width: ${screen.md}px) {
      font-size: 1.1rem;
    }
  `;
    
  return (
    <InfoNav>
      <NavLink to='/' exact activeClassName="active">home</NavLink>
      <NavLink to='/comm-links' activeClassName="active">comms</NavLink>
      <NavLink to='/team' activeClassName="active">team</NavLink>
      <NavLink to='/contact' activeClassName="active">support</NavLink>
    </InfoNav>
  );
}

export default InfoNav;
