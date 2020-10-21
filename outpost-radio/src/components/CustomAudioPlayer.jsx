import React from 'react';

const CustomAudioPlayer = (props) => {
    return (
        <audio 
      controls
      id='player' 
      src= "https://sync.outpost.radio/radio/8000/radio.mp3?1603314020" >
      </audio>
      // <iframe src="https://sync.outpost.radio/radio/8000/radio.mp3?1603314020" frameborder="0"></iframe>
    );
}

export default CustomAudioPlayer;
