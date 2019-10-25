import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import Player from '../player/player';
import HocComponent from '../../hoc/with_data';

import '../style.css';

const Audio = props => {
  return(
    <Player
      { ...props }
    />
  )
}

const mapStateToProps = ({ recordsPlayer, radioShowState, mode }) => {
  const { playingShowId } = radioShowState;
  const { changeMode } = mode;

  return {
    ...recordsPlayer,
    playingShowId,
    changeMode
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setAudioPlaying: payload => dispatch({ type: actionTypes.SET_PLAYER_PLAYING, payload }),
    setAudioProgress: payload => dispatch({ type: actionTypes.SET_PLAYER_PROGRESS, payload }),
    setAudioDuration: payload => dispatch({ type: actionTypes.SET_PLAYER_DURATION, payload }),
    setRadioShowState: payload => dispatch({ type: actionTypes.SET_REDIO_SHOW_STATE, payload }),
    setLoading: () => dispatch({ type: actionTypes.SET_LOADING })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HocComponent(Audio));