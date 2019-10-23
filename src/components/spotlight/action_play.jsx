import React from 'react';
import Play from '../buttons/button_play';
import Pause from '../buttons/button_pause';

const ActionPlay = props => {
  const { 
    showId,
    id,
    setRadioShowState,
    onSwitchControlPlaying,
    nowPlaying 
  } = props;

  if (showId !== id || !nowPlaying) {
    return(
      <Play onPlay={ () => {
        setRadioShowState(id);
        return onSwitchControlPlaying();
      }} /> 
    )
  }

  return(
    <Pause onPause={ () => {
      setRadioShowState();
      return onSwitchControlPlaying();
    }} />
  )
}

export default ActionPlay;