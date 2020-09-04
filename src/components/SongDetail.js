import React, { useState } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  const [active, setActive] = useState(true);

  if (!song) {
    return (
      <div>
        <h1>Select a song!</h1>
      </div>
    );
  }
  return (
    <div className='App-selected'>
      <div className='selected-header'>
        <img
          className={`avatar ${active ? '' : 'playing'}`}
          src={song.poster}
          alt={song.title}
        />
      </div>
      <div className='selected-body'>
        <h2>{song.title}</h2>
        <p className='timer'>{song.duration}</p>
        <button className='play' onClick={() => setActive(!active)}>
          {active ? 'play' : 'pause'}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
