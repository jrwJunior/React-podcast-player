import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../buttons/button';
import './style.css';

const Queue = props => {
  const { onSwitchQueue } = props;

  return(
    <>
      <Button
        type='button'
        className='svg-icon-btn queuelist tooltip'
        data-tooltip='Queue'
        onClick={ onSwitchQueue }
      >
        <svg className='svg-icon icon-queue' height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M.867.109C.387-.144 0 .059 0 .565v4.87c0 .503.39.71.867.457L4.643 3.46c.476-.252.476-.663 0-.916z"></path>
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M1 17h16M10 3h7M1 10h16"/>
            </g>
          </g>
        </svg>
      </Button>
    </>
  )
}

Queue.propTypes = {
  onSwitchQueue: PropTypes.func
}

export default Queue;