import { combineReducers } from 'redux';
import disco1 from '../assets/disco1.png';
import disco2 from '../assets/disco2.png';
import disco3 from '../assets/disco3.png';
import disco4 from '../assets/disco4.png';

const songsReducer = () => {
  return [
    { title: 'Little birds', duration: '2:32', poster: disco1 },
    { title: 'Kings', duration: '6:11', poster: disco2 },
    { title: 'Freeman', duration: '1:04', poster: disco3 },
    { title: 'Random Song', duration: '3:55', poster: disco4 },
    { title: 'Ameno', duration: '5:52', poster: disco2 },
    { title: 'B! bri', duration: '1:34', poster: disco1 },
    { title: 'Code inc', duration: '13:55', poster: disco3 },
    { title: 'Flawless', duration: '1:24', poster: disco4 },
    { title: 'Flawless2', duration: '1:24', poster: disco2 },
    { title: 'Flawless3', duration: '1:24', poster: disco3 },
    { title: 'Flawless4', duration: '1:24', poster: disco1 }
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
