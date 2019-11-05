import React from 'react';
import { Consumer } from '../../audio_context/audio_context';
import PropTypes from 'prop-types';

import Controls from '../controls/controls_container';
import Actions from '../actions/actions';
import Clodcast from '../clodcast/clodcast_container';
import TimeLine from '../time/time_line';
import Volume from '../volume/volume_container';
import Nextup from '../nextup/next_up_container';

const Player = props => {
  const {
    onSwitchControlPlaying,
    onSeekForward,
    onSeekBack,
    onUpdateProgress,
    onSetProgress,
    onClearInterval,
    onUpdateAudioTime,
    ...rest
  } = props;

  return(
    <>
      <Consumer>
        { ({ audio }) => (
          <Controls
            onSwitchControlPlaying={ onSwitchControlPlaying }
            onSeekForward={ onSeekForward }
            onSeekBack={ onSeekBack }
            onUpdateAudioTime={ onUpdateAudioTime }
            audio={ audio }
          />
        )}
      </Consumer>
      <Clodcast
        { ...rest }
      />
      <Actions/>
      <Consumer>
        { ({ audio }) => (
          <TimeLine
            onUpdateProgress={ onUpdateProgress }
            onSetProgress={ onSetProgress }
            onClearInterval={ onClearInterval }
            audio={ audio }
          />
        )}
      </Consumer>
      <Consumer>
        { ({ audio }) => (
          <Volume audio={ audio }/>
        )}
      </Consumer>
      <Nextup
        onSwitchControlPlaying={ onSwitchControlPlaying }
        { ...rest }
      />
    </>
  )
}

Player.propTypes = {
  playing: PropTypes.bool,
  onSwitchControlPlaying: PropTypes.func,
  onSeekForward: PropTypes.func,
  onSeekBack: PropTypes.func,
  onSetProgress: PropTypes.func
}

export default Player;