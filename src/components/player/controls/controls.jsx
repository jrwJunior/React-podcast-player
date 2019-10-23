import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from '../../buttons/button_group';
import Play from '../../buttons/button_play';
import Pause from '../../buttons/button_pause';
import SeekBack from '../../buttons/button_seek_back';
import SeekForward from '../../buttons/button_seek_forward';

const ControlsView = props => {
  const { 
    nowPlaying,
    progress,
    onSwitchControlPlaying,
    onSeekForward,
    onSeekBack,
  } = props;

  return(
    <ButtonGroup>
      <li className='svg-icon-group-item'>
        <SeekBack
          disabled={ !(progress >= 15) }
          onSeekBack={ onSeekBack }
        />
      </li>
      <li className='svg-icon-group-item'>
        { !nowPlaying ? <Play onPlay={ onSwitchControlPlaying } /> : <Pause onPause={ onSwitchControlPlaying } /> }
      </li>
      <li className='svg-icon-group-item'>
        <SeekForward
          onSeekForward={ onSeekForward }
        />
      </li>
    </ButtonGroup>
  )
}

ControlsView.propTypes = {
  nowPlaying: PropTypes.bool,
  onSwitchControlPlaying: PropTypes.func,
  onSeekForward: PropTypes.func,
  onSeekBack: PropTypes.func
}

export default ControlsView