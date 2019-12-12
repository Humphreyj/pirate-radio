import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Team from './Team';
import Contact from './Contact';

const InfoPanel = () => {

    const Panel = styled.div`

    nav {
        display: flex;
        justify-content: space-evenly;
        margin-top: 2em;
        font-family: 'Saira Semi Condensed', sans-serif;
        font-size: 1.3em;
        
        a {
            text-decoration: none;
            color: white;
        }
        a:hover {
            color: rgba(129, 178, 60, 0.6)
        }
    }
    `
    const Info = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 2%;
    font-family: 'Roboto Slab', serif;
    background-color: rgba(140, 140, 134, .3);
    
    `
    return (
        <div>
            <Panel>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/team'>Team</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <Info>
                    <Route exact path='/' component={Home}/>
                    <Route path='/team' component={Team} />
                    <Route path = '/contact' component={Contact}/>
                </Info>

            </Panel>
            
        </div>
    );
}

export default InfoPanel;
