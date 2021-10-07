import React from 'react';
import GenreList from './components/SideBar/GenreList.jsx';
import SubList from './components/SideBar/SubList.jsx';
import genreData from './data/genreData.js';
import subData from './data/subData.js';
import AboutMe from './components/SideBar/AboutMe.jsx';
import About from './components/PageRenders/About.jsx';
import styled from 'styled-components';
import PickPlatform from './components/PickPlatform.jsx';
import PickGenre from './components/PickGenre.jsx';
import PickLength from './components/PickLength.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      genres: genreData,
      subgenres: subData,
      showGenres: false,
      showSubgenres: false
    }
    this.handleAboutMe = this.handleAboutMe.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
    this.handleGenreDropdown = this.handleGenreDropdown.bind(this);
    this.handleSubgenreDropdown = this.handleSubgenreDropdown.bind(this);
  }
  handleAboutMe() {
    this.setState({
      page: 'about me'
    });
  }
  handleBackHome() {
    this.setState({
      page: 'home'
    });
  }
  handleGenreDropdown() {
    if (this.state.showGenres === false) {
      this.setState({
        showGenres: true
      });
    } else if (this.state.showGenres === true) {
      this.setState({
        showGenres: false
      });
    }
  }
  handleSubgenreDropdown() {
    if (this.state.showSubgenres === false) {
      this.setState({
        showSubgenres: true
      });
    } else if (this.state.showSubgenres === true) {
      this.setState({
        showSubgenres: false
      });
    }
  }

  render () {
    return (
    <Web>
      <Title>
        <Garbanzo onClick={this.handleBackHome}>laughingGarbanzo
          </Garbanzo>
      </Title>
      <Body>
        <LeftStyle>
          <AboutMe about={this.handleAboutMe}/>
          <GenreList
          genres={this.state.genres}
          show={this.state.showGenres}
          dropdown={this.handleGenreDropdown}
          />
          <SubList
          subgenres={this.state.subgenres}
          show={this.state.showSubgenres}
          dropdown={this.handleSubgenreDropdown}
          />
          <div>Other hobbies</div>
        </LeftStyle>
        <RightStyle>
          {this.state.page === 'about me' ?
            <About home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'home' ?
            <div>
              <PickPlatform />
              <PickGenre genres={this.state.genres}/>
              <PickLength />
              <button>Get recommendation</button>
            </div>
          : ''}
        </RightStyle>
      </Body>
    </Web>
    );
  }
}

var Web = styled.div`
  height: 100vh;
  color: #d4b5a9;
`;
var Title = styled.div`
  font-size: 36px;
  text-align: left;
  padding: 10px;
`;
var Garbanzo = styled.div`
  cursor: pointer;
`;
var Body = styled.div`
  display: flex;
  height: 100%;
  margin: 0;
  min-height: 100%;
`;
var LeftStyle = styled.div`
  width: 20%;
`;
var RightStyle = styled.div`
  width: 80%;
`;

export default App;