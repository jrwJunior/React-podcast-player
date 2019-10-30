import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import Cloudcast from './clodcast';
import './style.css';

class ClodcastContainer extends Component {  
  componentDidMount() {
    this.props.setRadioShowState(this.props.playlist[0].id);
  }

  componentDidUpdate(prevProps) {
    const { playingShowId, setClodcastDetails } = this.props;

    if (playingShowId !== prevProps.playingShowId) {
      this.props.getData(playingShowId, setClodcastDetails);
    }
  }

  render() {
    return(
      <Cloudcast
        { ...this.props }
      />
    )
  }
}

ClodcastContainer.propTypes = {
  nowPlaying: PropTypes.bool,
  playingShowId: PropTypes.string,
  setClodcastDetails: PropTypes.func
}

const mapStateToProps = ({ clodcastDetails, radioShowState }) => {
  const { playingShowId } = radioShowState;

  return {
    ...clodcastDetails,
    playingShowId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setClodcastDetails: payload => dispatch({ type: actionTypes.SET_SHOW_NAME_BY_AUTHOR, payload }),
    setRadioShowState: payload => dispatch({ type: actionTypes.SET_REDIO_SHOW_STATE, payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClodcastContainer);