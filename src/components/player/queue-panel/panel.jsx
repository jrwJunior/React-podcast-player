import React from 'react';

const QueuePanel = ({ children }) => {
  return(
    <div className='player-queuelist'>
      { children }
    </div>
  )
}

export default QueuePanel;