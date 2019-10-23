import React from 'react';
import ControlPlay from './controlPlaying';

const QueueItem = props => {
  const { 
    title,
    author,
    cover,
    id,
    onSwitchControlPlaying,
    setRadioShowState,
    playingShowId,
    nowPlaying } = props;

  return(
    <div 
      className={ `cloudcast-item cloudcast-upnext ${ playingShowId === id ? 'now-playing' : '' } ${ !nowPlaying ? 'pause' : '' }`.trim() }
      >
      <div className='cloudcast-upnext-image'>
        <ControlPlay
          showId={ playingShowId }
          id={ id }
          onUpdateShowId={ setRadioShowState }
          onSwitchControlPlaying={ onSwitchControlPlaying }
        />
        <figure>
          <img src={ cover } alt=""/>
        </figure>
      </div>
      <div className='cloudcast-upnext-details'>
        <div className='cloudcast-name'>{ title }</div>
        <div className='cloudcast-owner'>{ author }</div>
      </div>
    </div>
  )
}

export default QueueItem;