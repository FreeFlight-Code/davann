import React from 'react';
import Header from './Header.js';
import VideoProgram from './VideoProgram.js';
import ImageProgram from './ImageProgram.js';
import MobileAlert from './MobileAlert.js';
import './App.css';
import './animations.css';
import videos from './videos.json';
import images from './images';

function App () {
  let isMobile = window.screen.width <= 580;

    return (
      <div className="App">
        {isMobile && < MobileAlert />}
        < Header text="Annette"/>
        < VideoProgram videos={videos} />
        < ImageProgram images={images} />
      </div>
    );
}

export default App;
