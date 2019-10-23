import React from 'react';
import PropTypes from 'prop-types';
import Queue from '../queue/queue';

const Nextup = props => {
  const { switchQueue, onSwitchQueue } = props;

  return(
    <ul className='player-options'>
      <li className='player-options-item'>
        <Queue
          switchQueue={ switchQueue }
          onSwitchQueue={ onSwitchQueue }
        />
      </li>
    </ul>
  )
}

Nextup.propTypes = {
  switchQueue: PropTypes.bool,
  onSwitchQueue: PropTypes.func
}

export default Nextup;