import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';

import ProgressBar from '../progress/progress';
import TooltipProgress from '../tooltip/tooltip_container';

class TimeLine extends Component {
  static propTypes = {
    onSetProgress: PropTypes.func,
    onUpdateProgress: PropTypes.func,
    onClearInterval: PropTypes.func
  }

  newMouseMoveFunction = null;

  handlerMouseOver = () => {
    const { setProgressBarActive } = this.props;

    setProgressBarActive();
  }

  handlerMouseOut = () => {
    const { setProgressBarActive } = this.props;

    setProgressBarActive();
  }

  handlerMouseDown = () => {
    const { setHoldProgressBar, onClearInterval } = this.props;

    if (!this.props.holding) {
      onClearInterval();
      setHoldProgressBar();
    }
  }

  handlerMouseUp = () => {
    const { audio } = this.props;
    const { onUpdateProgress, setHoldProgressBar, progress } = this.props;

    if (this.props.holding) {
      audio.currentTime = progress;

      onUpdateProgress();
      setHoldProgressBar();
    }
  }

  handlerMouseMove = callback => {
    this.newMouseMoveFunction = callback;
  }

  render() {
    const { onSetProgress, ...rest } = this.props;

    return(
      <div className='player-track'>
        <ProgressBar
          playerParams={ rest }
          onSetProgress={ onSetProgress }
          onMouseDown={ this.handlerMouseDown }
          onMouseUp={ this.handlerMouseUp }
          onMouseOver={ this.handlerMouseOver }
          onMouseOut={ this.handlerMouseOut }
          onMouseMove={ this.newMouseMoveFunction }
        >
          <TooltipProgress
            onMouseMove={ this.handlerMouseMove }
            onChange={ this.handlerChenge }
          />
        </ProgressBar>
      </div>
    )
  }
}

const mapStateToProps = ({ holdProgressBar, recordsPlayer, positionTooltip }) => {
  const { progress, duration } = recordsPlayer;

  return {
    ...holdProgressBar,
    ...positionTooltip,
    progress,
    duration,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHoldProgressBar: () => dispatch({ type: actionTypes.SET_PLAYER_PROGRESS_BAR_HOLDING }),
    setProgressBarActive: () => dispatch({ type: actionTypes.SET_PLAYER_ACTIVE_PROGRESS_BAR })
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(TimeLine);