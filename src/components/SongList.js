import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className='App-list' key={song.title}>
          <button
            className='app-list-button'
            onClick={() => this.props.selectSong(song)}
          >
            <h3>{song.title}</h3>
            <div>body</div>
          </button>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.songs);
    // console.log(this.props);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong
})(SongList);
