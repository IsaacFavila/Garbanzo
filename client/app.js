import React from 'react';
import GenreList from './components/GenreList.jsx';
import genreData from './data/genreData.js';
import AboutMe from './components/AboutMe.jsx';
import styled from 'styled-components';
import PickGenre from './components/PickGenre.jsx';
import PickLength from './components/PickLength.jsx';
import PickAspect from './components/PickAspect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      genres: genreData
    }
    // binds
  }
  // functions
  render () {
    return (
    <WebStyle>
      <TitleStyle>creative title</TitleStyle>

      <BodyStyle>
        <LeftStyle>
          <AboutMe page={this.state.page}/>
          <GenreList genres={this.state.genres}/>
        </LeftStyle>

        <SuggestionStyle>
          <PickGenre genres={this.state.genres}/>
          <PickLength />
          <PickAspect />
          <button>Get recommendation</button>
        </SuggestionStyle>
      </BodyStyle>

    </WebStyle>
    );
  }
}

var WebStyle = styled.div`
  height: 100%;
  width: 100%;
`;
var TitleStyle = styled.div`
  font-size: 36px;
  text-align: center;
  background-color: lightblue;
  padding: 10px;
  margin-bottom: 15px;
`;
var BodyStyle = styled.div`
  display: flex;
`;
var LeftStyle = styled.div`
  background-color: lightblue;
`;
var SuggestionStyle = styled.div`
  text-align: center;
  background-color: white;
  justify-content: center;
`;

export default App;