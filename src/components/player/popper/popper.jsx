import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../actions/actionTypes';
import './style.css';

class Popper extends Component {
  body() {
    return(
      <div className="popper-content popper-player-mode">
        <label className='label-mode'>
          <div className='label-text'>Dark mode</div>
          <div className='label-control'>
            <span
              className={ `input-switch ${ this.props.changeMode ? 'is-checked' : '' }`.trim() } 
              onClick={ evt => {
                evt.preventDefault();
                return this.props.setMode();
              }}
            >
              <input className='input-control' type="chgeckbox"/>
            </span>
          </div>
        </label>
      </div>
    )
  }

  render() {
    return(
      <div className="popper-wrapper">
        <button
          className={ `svg-icon-btn ${ this.props.isOpen ? 'is-active' : 'tooltip' }` }
          type='button'
          aria-label="Favorite this show"
          data-tooltip='View mode'
          onClick={ () => this.props.setIsOpenPopper() }
        >
          <svg className="svg-icon svg-icon-options" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
        </button>
        <div className="popper" x-placement="top" style={{ display: !this.props.isOpen ? "none" : false }}>
          { this.props.isOpen ? this.body() : null }
          <div className='popper-arrow'></div>
        </div>
      </div>
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
  mapDispatchToProps)(Popper);