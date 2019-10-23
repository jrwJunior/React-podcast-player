import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import PropTypes from 'prop-types';

import QueuePanelView from './panel';
import QueueHead from './head';
import QueueItem from './item';
import './style.css';

class QueuePanelContainer extends Component {

  static propTypes = {
    nowPlaying: PropTypes.bool,
    playingShowId: PropTypes.string,
    onSwitchQueue: PropTypes.func,
    dataQueue: PropTypes.array
  }

  getDataQueue = () => {
    const { dataQueue, ...rest } = this.props;
    
    if (dataQueue.length) {
      return(
        dataQueue.map(item => (
          <QueueItem
            key={ item.id }
            { ...item }
            { ...rest }
          />
        ))
      )
    }

    return(
      <span className="up-next-learn">
        To add shows, & podcasts to up next use the buttons marked
      </span>
    )
  }

  render() {
    const { onSwitchQueue } = this.props;

    return(
      <QueuePanelView>
        <QueueHead
          onClose={ onSwitchQueue }
        />
        <div className='queuelist-content'>
        { this.getDataQueue() }
        </div>
      </QueuePanelView>
    )
  }
}

const mapStateToProps = ({radioShowsQueue, radioShowState, recordsPlayer}) => {
  const { nowPlaying } = recordsPlayer;
  const { playingShowId } = radioShowState;

  return {
    nowPlaying,
    playingShowId,
    ...radioShowsQueue,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setRadioShowState: payload => dispatch({ type: actionTypes.SET_REDIO_SHOW_STATE, payload })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(QueuePanelContainer);