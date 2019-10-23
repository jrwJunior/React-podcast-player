import React from 'react';
import Play from '../../buttons/button_play';

const Control = props => {
  const { showId, id, onUpdateShowId, onSwitchControlPlaying } = props;

  if (showId !== id) {
    return(
      <span className='play-hover'>
        <Play onPlay={ () => {
          console.log(id)
          onUpdateShowId(id);
          return onSwitchControlPlaying();
        }} />
      </span>
    )
  }

  return <span className='equalizer equalizer-inverse'/>
}

export default Control;