import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import { CSSTransition } from 'react-transition-group';

import QueuePanel from '../queue-panel/panel_container';
import Nextup from './next_up';

class NextupContainer extends Component {
  componentDidMount() {
    this.props.setTheShowToQueue(this.props.playlist);
  }

  handlerSwitchQueue = () => {
    this.props.setVisibilityPanel();
  }

  render() {
    const { isOpenQueue } = this.props;
    const { onSwitchControlPlaying } = this.props;
    
    return(
      <>
        <Nextup
          switchQueue={ isOpenQueue }
          onSwitchQueue={ this.handlerSwitchQueue }
        />
        <CSSTransition
          in={ isOpenQueue }
          timeout={ 350 }
          classNames='queue'
          unmountOnExit
        >
          <QueuePanel 
            { ...this.props } 
            onSwitchQueue={ this.handlerSwitchQueue }
            onSwitchControlPlaying={ onSwitchControlPlaying }
          />
        </CSSTransition>
      </>
    )
  }
}

const mapStateToProps = ({ radioShowsQueue }) => {
  const { isOpenQueue } = radioShowsQueue;

  return {
    isOpenQueue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTheShowToQueue: payload => dispatch({ type: actionTypes.SET_PLAYER_QUEUE_SHOW, payload }),
    setVisibilityPanel: () => dispatch({ type: actionTypes.SET_VISIBILITY_QUEUE_PANEL })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NextupContainer);