import React from 'react';

const ButtonGroup = ({ children }) => {
  return(
    <div className='player-controls'>
      <ul className='svg-icon-group'>
        { children }
      </ul>
    </div>
  )
}

export default ButtonGroup;