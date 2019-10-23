import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './controls';
import './style.css';

class ControlContainer extends Component {
  handlerSeekForward = () => {
    this.props.onUpdateAudioTime(this.props.progress + 30);
  }

  handlerSeekBack = () => {
    this.props.onUpdateAudioTime(this.props.progress - 15);
  }

  render() {
    return(
      <Controls
        { ...this.props }
        onSeekForward={ this.handlerSeekForward }
        onSeekBack={ this.handlerSeekBack }
      />
    );
  }
}

const mapStateToProps = ({ audio }) => ({ ...audio });

export default connect(mapStateToProps)(ControlContainer);