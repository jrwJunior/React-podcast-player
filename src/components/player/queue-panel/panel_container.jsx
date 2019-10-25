import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import { Scrollbars } from 'react-custom-scrollbars';

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
        there is no show in line
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
        <Scrollbars
          style={{ height: 'calc(100% - 65px)' }}
          renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        >
          <div className='queuelist-content'>
            { this.getDataQueue() }
          </div>
        </Scrollbars>
      </QueuePanelView>
    )
  }
}

const mapStateToProps = ({radioShowsQueue, radioShowState, recordsPlayer}) => {
  const { nowPlaying } = recordsPlayer;
  const { playingShowId } = radioShowState;
  const { dataQueue } = radioShowsQueue;

  return {
    nowPlaying,
    playingShowId,
    dataQueue,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setRadioShowState: payload => dispatch({ type: actionTypes.SET_REDIO_SHOW_STATE, payload }),
    setRemoveFromQueue: payload => dispatch({ type: actionTypes.SET_REMOVE_FROM_QUEUE, payload })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(QueuePanelContainer);