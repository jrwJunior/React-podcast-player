import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';

import Popper from './popper';

class PopperContainer extends Component {
  render() {
    return(
      <Popper
        { ...this.props }
      />
    );
  }
}

const mapStateToProps = ({ mode }) => {
  return {
    ...mode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIsOpenPopper: () => dispatch({ type: actionTypes.SET_TOGGLE_POPPER }),
    setMode: () => dispatch({ type: actionTypes.SET_SETTING_MODE })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(PopperContainer);