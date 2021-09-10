import React from 'react';
import GenreList from './components/GenreList.jsx';
import genreData from './data/genreData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: genreData
    }
    // binds
  }
  // functions
  render () {
    return (
    <div>
      <GenreList genres={this.state.genres}/>
      <div>Genre placeholder</div>
    </div>
    );
  }
}

export default App;