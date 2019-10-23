import React from 'react';
import Audio from '../player/audio/audio';
import { feed } from '../../songs/playlist.json';
import './app.css';

const App = () => {
  return(
    <main className='content react-container'>
      <Audio
        playlist={ feed }
      />
    </main>
  )
}

export default App;