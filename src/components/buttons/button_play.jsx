import React from 'react';
import Button from './button';

const PlayBtn = props => {
  return(
    <Button
      className='svg-icon-btn is-highlight' 
      type="button"
      aria-label="Play"
      onClick={ props.onPlay }
    >
      <svg 
        className="svg-icon svg-icon-play" 
        focusable="false" 
        height="1em" width="1em" 
        viewBox="0 0 12 12" 
        aria-hidden="true"
      >
        <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.5.5v11l9-5.5z" />
      </svg>
    </Button>
  )
}

export default PlayBtn;