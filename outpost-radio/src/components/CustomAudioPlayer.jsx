import React from 'react';

const CustomAudioPlayer = (props) => {
    return (
        <audio 
      controls
      autoPlay id='player' 
      src={props.sample}>
      </audio>
    );
}

export default CustomAudioPlayer;
