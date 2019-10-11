import React from 'react';
import Header from './components/Header.js';
import VideoProgram from './programs/VideoProgram.js';
import ImageProgram from './programs/ImageProgram.js';
import MobileAlert from './components/MobileAlert.js';
import './styles/App.css';
import './styles/animations.css';
import videos from './programs/data/videos.json';
import images from './programs/data/images.json';

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
