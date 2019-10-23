import React from 'react';
import PropTypes from 'prop-types';

import Time from '../time/time';

const TooltipProgress = ({ 
  activeBar, 
  translate, 
  barWidth, 
  duration }) => {
    
  if (activeBar) {
    return(
      <div 
        className='slider-toltip'
        style={{ 
          transform: `translate3d(${ translate }px,0,0)`,
          willChange: 'transform' 
        }}
        >
          { <Time start={ (translate / barWidth) * duration } /> }
      </div> 
    )
  }

  return null;
}

TooltipProgress.propTypes = {
  activeBar: PropTypes.bool,
  translate: PropTypes.number,
  barWidth: PropTypes.number,
  duration: PropTypes.number
}

export default TooltipProgress;