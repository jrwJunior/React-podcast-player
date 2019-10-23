import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actionTypes';
import AlbumArt from './album_art';
import ActionPlay from './action_play';
import Actions from './actions';
import { feed } from '../../songs/playlist.json';

class Item extends Component {
  myRef = React.createRef();

  handlerAddTheShowToQueue = () => {
    const uuid = this.myRef.current.dataset.key;
   // eslint-disable-next-line
    const dataItem = feed.filter(item => {
      if (item.hasOwnProperty('id') && item.id === uuid) {
        return item;
      }
    });

    this.props.setTheShowToQueue(...dataItem);
  }  

  render() {
    const { id, playingShowId, data, ...rest } = this.props;

    return(
      <div 
        className={ `spotlight ${ playingShowId === id ? 'is-active' : '' }`.trim() } 
        data-key={ id } 
        ref={ this.myRef }
      >
        <AlbumArt
          data={ data }
        />
        <div className='spotlight-content'>
          <div className="spotlight-head">
            <ActionPlay
              showId={ playingShowId }
              id={ id }
              { ...rest }
            />
            <hgroup className='spotlight-heading'>
              <h1>
                <span>{ data.title }</span>
              </h1>
              <h2>
                by&nbsp;
                <span className='author'>
                  { data.author }
                </span>
              </h2>
            </hgroup>
          </div>
          <div className="spotlight-state-play">
            <Actions
              onAddTheShowToQueue={ this.handlerAddTheShowToQueue }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ radioShowState, recordsPlayer, radioShowsQueue }) => {
  const { nowPlaying } = recordsPlayer;
  const { playingShowId } = radioShowState;

  return {
    playingShowId,
    nowPlaying,
    ...radioShowsQueue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTheShowToQueue: payload => dispatch({ type: actionTypes.SET_PLAYER_QUEUE_SHOW, payload }),
    setRadioShowState: payload => dispatch({ type: actionTypes.SET_REDIO_SHOW_STATE, payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);