import React from 'react';
import PropTypes from 'prop-types';

const QueueHead = props => {
  const { onClose } = props;

  return(
    <div className='queuelist-head'>
      <div className='queuelist-head-title'>Next up</div>
      <div className='queuelist-close'>
        <button 
          type='button' 
          className='svg-icon-btn tooltip' 
          aria-label="Close"
          data-tooltip='Close'
          onClick={ onClose }
        >
          <svg className="svg-icon svg-icon-chevron-down" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M6.013 8.998a.61.61 0 0 0 .416-.169l2.661-2.1 2.662-2.102c.654-.517-.12-1.498-.775-.981l-2.483 1.96-2.482 1.96-4.99-3.921c-.656-.515-1.428.468-.773.983L5.597 8.83a.61.61 0 0 0 .416.168z"/></svg>
        </button>
      </div>
    </div>
  )
}

QueueHead.propTypes = {
  onClose: PropTypes.func
}

export default QueueHead;