import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../buttons/button';
import VolumeHigh from '../../buttons/button_volume_high';
import VolumeLow from '../../buttons/button_volume_low';

const VolumeBarView = props => {
  const { volume, onSetVolume, onVolumeSwitch } = props;

  return(
    <div className='wrapper-volume'>
      <Button
        type='button'
        className='svg-icon-btn'
        onClick={ onVolumeSwitch }
      >
        { volume ? <VolumeHigh /> : <VolumeLow /> }
      </Button>
      <div className='player-valume'>
        <div className='slider'>
          <div className='slider-track'>
            <div className='slider-track-default'></div>
            <div className='slider-track-active' style={{ width: `${ volume }%`, willChange: 'width' }}/>
            <input 
              className='slider-track-input mousetrap'
              type="range"
              step='1'
              min='0'
              max='100'
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={ volume }
              value={ volume }
              onChange={ onSetVolume }
              />
          </div>
        </div>
      </div>
    </div>
  )
}

VolumeBarView.propTypes = {
  volume: PropTypes.number,
  onChangeValume: PropTypes.func,
  onVolumeSwitch: PropTypes.func
}

export default VolumeBarView;