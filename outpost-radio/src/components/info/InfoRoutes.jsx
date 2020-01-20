import React from 'react';
// import Dropdown from 'react-dropdown';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Comms from './Comms';
import Home from './Home';
import Support from './Support';
import Team from './Team';
import 'react-dropdown/style.css';
import { 
  color, 
  // screen, 
} from '../../util';

const InfoRoutes = () => {
  const InfoRoutes = styled.div`
    color: ${color.whitish};
    grid-area: info;
    padding: 0 .5rem;
  `;

  return (
    <InfoRoutes>
      <Route exact path='/' component={Home}/>
      <Route path='/comm-links' component={Comms}/>
      <Route path='/team' component={Team} />
      <Route path='/contact' component={Support}/>
    </InfoRoutes>
  );
};

export default InfoRoutes;