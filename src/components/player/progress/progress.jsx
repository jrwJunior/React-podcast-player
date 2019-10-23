import React from 'react';
import PropTypes from 'prop-types';

import Time from '../time/time';
import './style.css';

const ProgressBar = props => {
  const {
    playerParams,
    onSetProgress,
    onMouseDown,
    onMouseUp,
    onMouseOver,
    onMouseOut,
    onMouseMove
  } = props;
  
  const { 
    progress, 
    duration, 
    holding, 
    activeBar, 
    translate,
    barWidth } = playerParams;
  
    const progressBar = (progress / duration) * 100;

  return(
    <div className='track-seekbar'>
      <div 
        className={ `slider ${ activeBar ? 'is-active' : 'is-inactive' }` }
      >
        <div className='slider-counter slider-counter-current'>
          <Time start={ progress } />
        </div>
        <div 
          className='slider-track'
          onMouseOver={ onMouseOver }
          onMouseOut={ onMouseOut }
          onMouseMove={ onMouseMove }
        >
          <div className='slider-track-default'/>
          <div className='slider-track-active' style={{ width:`${ progressBar }%`, willChange:'width' }} />
          <input 
            type="range"
            className='slider-track-input mousetrap'
            step='1'
            min='0'
            max={ duration }
            aria-valuemin={ 0 }
            aria-valuemax={ duration }
            aria-valuenow={ progress }
            value={ progress }
            onChange={ () => onSetProgress({holding, translate, barWidth}) }
            onMouseDown={ onMouseDown }
            onMouseUp={ onMouseUp }
            />
        </div>
        <div className='slider-counter slider-counter-max'>
          -
          <Time
            start={ progress }
            end={ duration } 
          />
        </div>
        { props.children }
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  playerParams: PropTypes.object,
  onSetProgress: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  newMouseMove: PropTypes.func
}

export default ProgressBar;