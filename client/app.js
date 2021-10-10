import React from 'react';
import styled from 'styled-components';
import subData from './data/subData.js';
import genreData from './data/genreData.js';
import SubList from './components/SideBar/SubList.jsx';
import AboutMe from './components/SideBar/AboutMe.jsx';
import GenreList from './components/SideBar/GenreList.jsx';
import PickGenre from './components/Questions/PickGenre.jsx';
import About from './components/PageRenders/AboutMe/About.jsx';
import Hobbies from './components/PageRenders/AboutMe/OtherHobbies.jsx';
import Action from './components/PageRenders/Genres/Action.jsx';
import Anime from './components/PageRenders/Genres/Anime.jsx';
import Comedy from './components/PageRenders/Genres/Comedy.jsx';
import Crime from './components/PageRenders/Genres/Crime.jsx';
import Drama from './components/PageRenders/Genres/Drama.jsx';
import Reality from './components/PageRenders/Genres/Reality.jsx';
import Romance from './components/PageRenders/Subgenres/Romance.jsx';
import Seinen from './components/PageRenders/Subgenres/Seinen.jsx';
import Shounen from './components/PageRenders/Subgenres/Shounen.jsx';
import Thriller from './components/PageRenders/Subgenres/Thriller.jsx';
import Other from './components/PageRenders/Subgenres/Other.jsx';
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
    this.handleHobby = this.handleHobby.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleAnime = this.handleAnime.bind(this);
    this.handleComedy = this.handleComedy.bind(this);
    this.handleCrime = this.handleCrime.bind(this);
    this.handleDrama = this.handleDrama.bind(this);
    this.handleReality = this.handleReality.bind(this);
    this.handleRomance = this.handleRomance.bind(this);
    this.handleSeinen = this.handleSeinen.bind(this);
    this.handleShounen = this.handleShounen.bind(this);
    this.handleThriller = this.handleThriller.bind(this);
    this.handleOther = this.handleOther.bind(this);
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
  handleHobby() {
    this.setState({
      page: 'hobby'
    });
  }
  handleAction() {
    this.setState({
      page: 'action'
    });
  }
  handleAnime() {
    this.setState({
      page: 'anime'
    });
  }
  handleComedy() {
    this.setState({
      page: 'comedy'
    });
  }
  handleCrime() {
    this.setState({
      page: 'crime'
    });
  }
  handleDrama() {
    this.setState({
      page: 'drama'
    });
  }
  handleReality() {
    this.setState({
      page: 'reality'
    });
  }
  handleRomance() {
    this.setState({
      page: 'romance'
    });
  }
  handleSeinen() {
    this.setState({
      page: 'seinen'
    });
  }
  handleShounen() {
    this.setState({
      page: 'shounen'
    });
  }
  handleThriller() {
    this.setState({
      page: 'thriller'
    });
  }
  handleOther() {
    this.setState({
      page: 'other'
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
          hobby={this.handleHobby}
          show={this.state.showAboutMe}
          dropdown={this.handleAboutMeDropdown}
          />
          <GenreList
          genres={this.state.genres}
          show={this.state.showGenres}
          dropdown={this.handleGenreDropdown}
          action={this.handleAction}
          anime={this.handleAnime}
          comedy={this.handleComedy}
          crime={this.handleCrime}
          drama={this.handleDrama}
          reality={this.handleReality}
          />
          <SubList
          subgenres={this.state.subgenres}
          show={this.state.showSubgenres}
          dropdown={this.handleSubgenreDropdown}
          romance={this.handleRomance}
          seinen={this.handleSeinen}
          shounen={this.handleShounen}
          thriller={this.handleThriller}
          other={this.handleOther}
          />
        </LeftStyle>
        <RightStyle>
          {this.state.page === 'about me' ?
            <About home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'hobby' ?
            <Hobbies home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'action' ?
            <Action home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'anime' ?
            <Anime home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'comedy' ?
            <Comedy home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'crime' ?
            <Crime home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'drama' ?
            <Drama home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'reality' ?
            <Reality home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'romance' ?
            <Romance home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'seinen' ?
            <Seinen home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'shounen' ?
            <Shounen home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'thriller' ?
            <Thriller home={this.handleBackHome}/>
          : ''}
          {this.state.page === 'other' ?
            <Other home={this.handleBackHome}/>
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
`;
var LeftStyle = styled.div`
  width: 20%;
`;
var RightStyle = styled.div`
  width: 80%;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 15px;
`;

export default App;