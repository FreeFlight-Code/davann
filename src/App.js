import React, { Component } from 'react';
import './App.css';

class App extends Component {

  video = (videoId, youtubeId, start, end, mute = 0)=>{
      return (
        <iframe id={videoId} 
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&showinfo=0&controls=0&subdued=1&mute=${mute}&start=${start}&end=${end}`} 
          frameborder="0" 
          controls="0"
          autoplay="1" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        >
        </iframe>
      )
  }

  render() {
    return (
      <div className="App">
        {this.video('godmadeyouforme', 'jLCHpZ6B1gU', 0, 35)}
        {this.video('unforgettable', '_T8ml-P0GkI', 0, 10)}
      </div>
    );
  }
}

export default App;
