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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid ${color.whitish};
    width: 100%;
    margin: 0 auto;
    font-family: 'Topaz', monospace;
    
    a {
      color: white;
      height: 100%;
      line-height: 100%;
      padding: .25rem .5rem;
      text-decoration: none;
      font-family: 'Topaz', cursive;
      font-size: 2em;

      &.active, &:hover {
        background-color: ${color.whitish};
        color: ${color.blackish};
      }
      @media (max-width: ${screen.sm}px) {
        font-size: 1.1rem;
        width: 80%;
      }
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
