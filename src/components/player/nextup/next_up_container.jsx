import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import { CSSTransition } from 'react-transition-group';

import QueuePanel from '../queue-panel/panel_container';
import Nextup from './next_up';

class NextupContainer extends Component {
  state = {
    isOpenQueue: false
  }

  componentDidMount() {
    this.props.setTheShowToQueue(this.props.playlist);
  }

  handlerSwitchQueue = () => {
    this.setState(({ isOpenQueue }) => {
      return {
        isOpenQueue: !isOpenQueue
      }
    });
  }

  render() {
    const { isOpenQueue } = this.state;
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

const mapDispatchToProps = dispatch => {
  return {
    setTheShowToQueue: payload => dispatch({ type: actionTypes.SET_PLAYER_QUEUE_SHOW, payload })
  }
}

export default connect(null, mapDispatchToProps)(NextupContainer);