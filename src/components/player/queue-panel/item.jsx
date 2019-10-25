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
      className={ `cloudcast-item cloudcast-upnext ${ playingShowId === id ? 'now-playing' : '' }`.trim() }
      >
      <div className={ `cloudcast-upnext-image ${ playingShowId === id && nowPlaying ? 'is-active' : '' }`.trim() }>
        <ControlPlay
          showId={ playingShowId }
          id={ id }
          onUpdateShowId={ setRadioShowState }
          onSwitchControlPlaying={ onSwitchControlPlaying }
        />
        <figure>
          <img src={ cover } alt=""/>
          { playingShowId === id && nowPlaying ? <span className="equalizer equalizer-inverse"></span> : null }
        </figure>
      </div>
      <div className='cloudcast-upnext-details'>
        <div className='cloudcast-name'>{ title }</div>
        <div className='cloudcast-owner'>{ author }</div>
        <div className="cloudcast-action">
          <button
            type='button'
            className='cloudcast-action-remove tooltip'
            data-tooltip='Remove'
            onClick={ () => props.setRemoveFromQueue(id) }
          >
            <svg className="svg-icon svg-icon-cancel" focusable="false" height="14" width="14" viewBox="0 0 12 12" aria-hidden="true"><path d="M1.75 10.25l8.5-8.5m.002 8.505L1.75 1.75" fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="1.5"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QueueItem;