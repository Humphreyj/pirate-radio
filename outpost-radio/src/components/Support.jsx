import React from 'react';
import styled from 'styled-components';


const Support = () => {

    const SupportWrap = styled.div`
    padding: 2%;

    a {
        text-decoration: none;
        color: rgba(255,255,255, .9);
        padding-top: 1em;
        
    }
    `
    return (
        <SupportWrap>
            <h4>Your Support Makes a Difference.</h4>
            <p>Thanks for supporting Outpost Radio, The Voice of the High Frontier. When you give to Outpost Radio, you make the local, regional and international independent journalism and music that you can only get from pirate radio possible.</p>
            <a href="#"><i className="fab fa-patreon fa-3x"></i></a>
        </SupportWrap>
    );
}

export default Support;
