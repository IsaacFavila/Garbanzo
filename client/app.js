import React from 'react';
import styled from 'styled-components';
import subData from './data/subData.js';
import genreData from './data/genreData.js';
import SubList from './components/SideBar/SubList.jsx';
import AboutMe from './components/SideBar/AboutMe.jsx';
import GenreList from './components/SideBar/GenreList.jsx';
import PickGenre from './components/Questions/PickGenre.jsx';
import About from './components/PageRenders/AboutMe/About.jsx';
import PickLength from './components/Questions/PickLength.jsx';
import PickPlatform from './components/Questions/PickPlatform.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      genres: genreData,
      subgenres: subData,
      showGenres: false,
      showSubgenres: false,
      showAboutMe: false,
      platform: '',
      genrePreferece: '',
      subgenrePreference: '',
      length: ''
    }
    this.handleAboutMe = this.handleAboutMe.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
    this.handleGenreDropdown = this.handleGenreDropdown.bind(this);
    this.handleSubgenreDropdown = this.handleSubgenreDropdown.bind(this);
    this.handleAboutMeDropdown = this.handleAboutMeDropdown.bind(this);
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
  handleAboutMeDropdown() {
    if (this.state.showAboutMe === false) {
      this.setState({
        showAboutMe: true
      });
    } else if (this.state.showAboutMe === true) {
      this.setState({
        showAboutMe: false
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
          <AboutMe
          about={this.handleAboutMe}
          show={this.state.showAboutMe}
          dropdown={this.handleAboutMeDropdown}
          />
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
  font-family: Arial, sans-serif;
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
  border: solid 1px;
`;
var LeftStyle = styled.div`
  width: 20%;
  border-right: solid 1px;
`;
var RightStyle = styled.div`
  width: 80%;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 15px;
`;

export default App;