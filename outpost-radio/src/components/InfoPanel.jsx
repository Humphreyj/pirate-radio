import React from 'react';
import { Route, Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';
import Home from './info/Home';
import Team from './info/Team';
import Support from './info/Support';

const InfoPanel = () => {

    const Panel = styled.div`
    padding: 1%;
    display: flex; 
    flex-direction: column;
   
    
    

    nav {
        display: flex;
        font-family: 'Tomorrow', sans-serif;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.3em;
        border: 2px solid rgba(255,255,255, .9);
        
        
        a {
            text-decoration: none;
            color: white;
            margin: 0 .25em;
        }
        @media(min-width: 800px) {
            width: 100%;
        }
        
        
    }

    @media(min-width: 800px) {
        width: 60%;
        margin-left: 2em;
        height: 30em;
        
    }
    `
    const Info = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 2%;
    font-family: 'Roboto Slab', serif;
    color: rgba(255,255,255, .9);
    @media(min-width: 800px) {
        width: 95%;
    }
    `
    
    return (
        
            <Panel>
                <nav>
                    <Link to='/'>home</Link>
                    <Link to='/team'>team</Link>
                    <Link to='/contact'>support</Link>
                </nav>
                <Info>
                    <Route exact path='/' component={Home}/>
                    <Route path='/team' component={Team} />
                    <Route path = '/contact' component={Support}/>
                </Info>

            </Panel>
            
        
    );
}

export default InfoPanel;
