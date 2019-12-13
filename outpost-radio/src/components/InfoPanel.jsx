import React from 'react';
import { Route, Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';
import Home from './Home';
import Team from './Team';
import Support from './Support';

const InfoPanel = () => {

    const Panel = styled.div`
    padding: 3%;
    margin-top: -6em;
    margin-bottom: 3em;
    
    height: 15em;

    nav {
        display: flex;
        justify-content: space-evenly;
        margin-top: 2em;
        font-family: 'Saira Semi Condensed', sans-serif;
        font-size: 1.3em;
        
        a {
            text-decoration: none;
            color: white;
            padding: 1%;
        }
        a:hover {
            background-color: rgba(129, 178, 60, 0.6);
            color: #111;
            font-weight: bold;
        }
    }
    `
    const Info = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 2%;
    font-family: 'Roboto Slab', serif;
    background-color: rgba(140, 140, 134, .3);
    color: rgba(255,255,255, .9);
    
    `
    
    return (
        <div>
            <Panel>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/team'>Team</Link>
                    <Link to='/contact'>Support</Link>
                </nav>
                <Info>
                    <Route exact path='/' component={Home}/>
                    <Route path='/team' component={Team} />
                    <Route path = '/contact' component={Support}/>
                </Info>

            </Panel>
            
        </div>
    );
}

export default InfoPanel;
