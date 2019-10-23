import React from 'react';

const Clodcast = props => {
  const { show, author, cover } = props;

  return(
    <div className='player-cloudcast' dir="ltr">
      <div className="player-cloudcast-image">
        <figure>
          <img src={ cover } alt=""/>
        </figure>
      </div>
      <div className="player-cloudcast-details">
        <div className='player-cloudcast-title'>
          { show }
        </div>
        <div className='player-cloudcast-author'>
          { author }
        </div>
      </div>
    </div>
  )
}

export default Clodcast;