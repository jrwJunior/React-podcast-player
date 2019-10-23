import React from 'react';
import Item from './item';
import './style.css';
import { feed } from '../../songs/playlist.json';

const Spotlight = props => {
  return(
    <div>
      {
        feed.map(({ id, ...rest }) => (
          <Item 
            key={ id } 
            id={ id }
            data={ rest }
            { ...props }
          />
        ))
      }
    </div>
  )
}

export default Spotlight;