import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import { AudioContext } from '../audio/context';
import VolumeBar from './volume';
import './style.css';

class VolumeContainer extends Component {
  static contextType = AudioContext;

  static propTypes = {
    volume: PropTypes.number,
    muteVolume: PropTypes.number,
    onSetVolume: PropTypes.func,
    updatetVolume: PropTypes.func,
    updateProgressBarVolume: PropTypes.func
  }

  componentDidUpdate(prevProps) {
    const { volume, updatetVolume } = this.props;
    
    if (!volume && prevProps.volume !== volume) {
      updatetVolume(prevProps.volume);
    }
  }

  setVolume = volume => {
    const { audio } = this.context;
    
    audio.volume = volume;
    this.props.updatetVolume(volume);
  }

  handerMuteVolume = evt => {
    const { value } = evt.target;
    let { muteVolume, updateProgressBarVolume } = this.props;

    // eslint-disable-next-line
    muteVolume = parseInt(value, 10);

    this.setVolume(muteVolume / 100);
    updateProgressBarVolume(muteVolume);
  }

  handlerMuteVolumeToggle = () => {
    const { muteVolume, volume, updateProgressBarVolume } = this.props;

    if (muteVolume > 0) {
      updateProgressBarVolume(0);
      this.setVolume(0);
    } else {
      updateProgressBarVolume(volume * 100);
      this.setVolume(volume);
    }
  }

  render() {
    const { muteVolume } = this.props;

    return(
      <VolumeBar
        volume={ muteVolume }
        onSetVolume={ this.handerMuteVolume }
        onVolumeSwitch={ this.handlerMuteVolumeToggle }
      />
    )
  }
}

const mapStateToProps = ({ recordVolume }) => recordVolume;

const mapDispatchToProps = dispatch => {
  return {
    updatetVolume: payload => dispatch({ type: actionTypes.SET_PLAYER_VOLUME, payload }),
    updateProgressBarVolume: payload => dispatch({ type: actionTypes.SET_PLAYER_MUTE_VOLUME, payload })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(VolumeContainer);