import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import '../reset.css';
import '../index.css';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <section className='container'>
        <div className='row'>
          <div className='col App-list-col'>
            <SongList />
          </div>
          <div className='col App-selected-col'>
            <SongDetail />
          </div>
        </div>
        <div className='row'>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
