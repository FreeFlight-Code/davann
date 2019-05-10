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

  if( window.screen.width <= 480 ) {
    return (
      <div className="App">
        < MobileAlert />
        < Header text="Annette"/>
        < VideoProgram videos={videos} />
        < ImageProgram images={images} />
      </div>
    );
  } else {
    return (
      <div className="App">
      < Header text="Annette"/>
      < VideoProgram videos={videos} />
      < ImageProgram images={images} />
    </div>
    )
  }
}

export default App;
