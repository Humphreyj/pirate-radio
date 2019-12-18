import React from 'react';
import { Route, Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';
import Home from './info/Home';
import Team from './info/Team';
import Support from './info/Support';
import Console from './Console';
import Comms from './info/Comms';

const InfoPanel = () => {

    const Panel = styled.div`
    padding: 0% 1%;
    margin-top: 1em;
    display: flex; 
    flex-direction: column;
    
    
    
   
    
    

    nav {
        display: flex;
        font-family: 'Tomorrow', sans-serif;
        justify-content: flex-start;
        align-items: center;
        border: 2px solid rgba(255,255,255, .9);
        margin-top: -2%;
        
        
        a {
            text-decoration: none;
            color: white;
            margin: 0 .25em;
        }
        @media(min-width: 1000px) {
            width: 100%;
            font-size: 1.3em;
        }
        
        
    }

    @media(min-width: 800px) {
        width: 55%;
        margin-left: 2em;
        margin-top: 0em;
        height: 30em;
        border-left: 2px dashed rgba(255,255,255, .9);
        
    }
    `
    const Info = styled.div`
    width: 60%;
    margin: 0 auto;
    padding:  2%;
    font-family: 'Tomorrow', serif;
    color: rgba(255,255,255, .9);
    @media(min-width: 800px) {
        width: 95%;
    }
    `
    
    return (
        
            <Panel>
                <nav>
                    <Link to='/'>home</Link>
                    <Link to='/comm-links'>comm-links</Link>
                    <Link to='/team'>team</Link>
                    <Link to='/contact'>support</Link>
                </nav>
                <Info>
                    <Route exact path='/' component={Home}/>
                    <Route path = '/comm-links' component={Comms}/>
                    <Route path='/team' component={Team} />
                    <Route path = '/contact' component={Support}/>
                </Info>
                <Console />

            </Panel>
            
        
    );
}

export default InfoPanel;
