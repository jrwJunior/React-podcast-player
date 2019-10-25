import React from 'react';
import './style.css';

const Popper = props => {
  return(
    <div className="popper-wrapper">
      <button
        className={ `svg-icon-btn ${ props.isOpen ? 'is-active' : 'tooltip' }` }
        type='button'
        aria-label="Favorite this show"
        data-tooltip='View mode'
        onClick={ () => props.setIsOpenPopper() }
      >
        <svg className="svg-icon svg-icon-options" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
      </button>
      <div className="popper" x-placement="top" style={{ display: !props.isOpen ? "none" : false }}>
        { props.isOpen ? <PopperBody { ...props } /> : null }
        <div className='popper-arrow'></div>
      </div>
    </div>
  );
}

const PopperBody = props => {
  return(
    <div className="popper-content popper-player-mode">
      <label className='label-mode'>
        <div className='label-text'>Dark mode</div>
        <div className='label-control'>
          <span
            className={ `input-switch ${ props.changeMode ? 'is-checked' : '' }`.trim() } 
            onClick={ evt => {
              evt.preventDefault();
              return props.setMode();
            }}
          >
            <input className='input-control' type="chgeckbox"/>
          </span>
        </div>
      </label>
    </div>
  )
}

export default Popper;