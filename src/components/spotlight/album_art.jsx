import React from 'react';

const AlbumArt = props => {
  const { cover } = props.data;

  return(
    <div className='album-art'>
      <figure>
        <div className='picture'>
          <img src={ cover } alt=""/>
        </div>
      </figure>
    </div>
  )
}

export default AlbumArt;