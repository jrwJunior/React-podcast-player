import React from 'react';
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
    onService,
    ...rest
  } = props;

  return(
    <>
      <div className='player' data-theme={ props.changeMode ? 'dark' : null }>
        <div className='react-container'>
          <Controls
            onSwitchControlPlaying={ onSwitchControlPlaying }
            onSeekForward={ onSeekForward }
            onSeekBack={ onSeekBack }
            { ...rest }
          />
          <Clodcast
            { ...rest }
            getData={ (data, setClodcastDetails) => (
              onService(data).then(({ title:show, author, cover }) => {
                setClodcastDetails({
                  show,
                  author,
                  cover
                });
              })
            )}
          />
          <Actions/>
          <div className='player-track'>
            <TimeLine
              onUpdateProgress={ onUpdateProgress }
              onSetProgress={ onSetProgress }
              onClearInterval={ onClearInterval }
            />
          </div>
          <Volume/>
          <Nextup
            onSwitchControlPlaying={ onSwitchControlPlaying }
            { ...rest }
          />
        </div>
      </div>
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