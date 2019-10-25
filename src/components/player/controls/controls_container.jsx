import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AudioContext } from '../audio/context';
import Controls from './controls';
import './style.css';

class ControlContainer extends Component {
  static contextType = AudioContext;

  handlerSeekForward = () => {
    this.props.onUpdateAudioTime(this.props.progress + 30);
  }

  handlerSeekBack = () => {
    this.props.onUpdateAudioTime(this.props.progress - 15);
  }

  handlerPlayerDisabledSeekBack = () => {
    const { audio } = this.context;

    if (audio.currentTime < 15) {
      return true;
    }
    return false;
  };

  handlerPlayerDisabledSeekForward = () => {
    const { audio } = this.context;

   if (audio.currentTime === audio.duration) {
      return true;
    }
    return false;
  };

  render() {
    return(
      <Controls
        { ...this.props }
        onSeekForward={ this.handlerSeekForward }
        onSeekBack={ this.handlerSeekBack }
        onPlayerDisabledSeekBack={ this.handlerPlayerDisabledSeekBack }
        onPlayerDisabledSeekForward={ this.handlerPlayerDisabledSeekForward }
      />
    );
  }
}

const mapStateToProps = ({ recordsPlayer }) => {
  const { nowPlaying, progress, load } = recordsPlayer;

  return {
    nowPlaying,
    load,
    progress
  }
};

export default connect(mapStateToProps)(ControlContainer);