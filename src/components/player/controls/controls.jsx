import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from '../../buttons/button_group';
import Play from '../../buttons/button_play';
import Pause from '../../buttons/button_pause';
import SeekBack from '../../buttons/button_seek_back';
import SeekForward from '../../buttons/button_seek_forward';
import Spinner from '../spinner/spinner';

const ControlsView = props => {
  const { 
    nowPlaying,
    onSwitchControlPlaying,
    onSeekForward,
    onSeekBack,
    onPlayerDisabledSeekBack,
    onPlayerDisabledSeekForward
  } = props;

  return(
    <ButtonGroup>
      <li className='svg-icon-group-item'>
        <SeekBack
          disabled={ onPlayerDisabledSeekBack() || props.load }
          onSeekBack={ onSeekBack }
        />
      </li>
      <li className='svg-icon-group-item'>
        { !nowPlaying ? <Play onPlay={ onSwitchControlPlaying } disabled={ props.load } /> : <Pause onPause={ onSwitchControlPlaying } disabled={ props.load } /> }
        { props.load ? <Spinner/> : null }
      </li>
      <li className='svg-icon-group-item'>
        <SeekForward
          onSeekForward={ onSeekForward }
          disabled={ onPlayerDisabledSeekForward() || props.load }
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