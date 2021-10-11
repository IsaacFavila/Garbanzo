import React from 'react';
import styled from 'styled-components';
import subData from './data/subData.js';
import genreData from './data/genreData.js';
import AboutMe from './components/SideBar/AboutMe.jsx';
import GenreList from './components/SideBar/GenreList.jsx';
import SubList from './components/SideBar/SubList.jsx';
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
      platform: null,
      genrePreferece: null,
      subgenrePreference: null,
      length: null,
      search: {}
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
    this.handlePlatformSelect = this.handlePlatformSelect.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleSubgenreSelect = this.handleSubgenreSelect.bind(this);
    this.handleLengthSelect = this.handleLengthSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handlePlatformSelect(event) {
    this.setState({
      platform: event.target.value
    })
    this.state.search.platform = event.target.value;
  }
  handleGenreSelect(event) {
    this.setState({
      genrePreferece: event.target.value
    })
    this.state.search.genre = event.target.value;
  }
  handleSubgenreSelect(event) {
    this.setState({
      subgenrePreferece: event.target.value
    })
    this.state.search.subgenre = event.target.value;
  }
  handleLengthSelect(event) {
    this.setState({
      length: event.target.value
    })
    this.state.search.length = event.target.value;
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.search.subgenre && this.state.search.genre !== 'anime' && this.state.search.platform !== 'crunchyroll') {
      delete this.state.search.subgenre;
    }
    if (this.state.search.genre && this.state.search.platform === 'crunchyroll') {
      delete this.state.search.genre;
    }
    console.log(this.state.search);
  }

  render () {
    return (<Web><Title onClick={this.handleBackHome}>laughingGarbanzo</Title><Body><LeftStyle><AboutMe about={this.handleAboutMe}hobby={this.handleHobby}show={this.state.showAboutMe}dropdown={this.handleAboutMeDropdown}/><GenreList genres={this.state.genres}show={this.state.showGenres}dropdown={this.handleGenreDropdown}action={this.handleAction}anime={this.handleAnime}comedy={this.handleComedy}crime={this.handleCrime}drama={this.handleDrama}reality={this.handleReality}/><SubList subgenres={this.state.subgenres}show={this.state.showSubgenres}dropdown={this.handleSubgenreDropdown}romance={this.handleRomance}seinen={this.handleSeinen}shounen={this.handleShounen}thriller={this.handleThriller}other={this.handleOther}/></LeftStyle><RightStyle>{this.state.page==='about me'?<About home={this.handleBackHome}/>:''}{this.state.page==='hobby'?<Hobbies home={this.handleBackHome}/>:''}{this.state.page==='action'?<Action home={this.handleBackHome}/>:''}{this.state.page==='anime'?<Anime home={this.handleBackHome}/>:''}{this.state.page==='comedy'?<Comedy home={this.handleBackHome}/>:''}{this.state.page==='crime'?<Crime home={this.handleBackHome}/>:''}{this.state.page==='drama'?<Drama home={this.handleBackHome}/>:''}{this.state.page==='reality'?<Reality home={this.handleBackHome}/>:''}{this.state.page==='romance'?<Romance home={this.handleBackHome}/>:''}{this.state.page==='seinen'?<Seinen home={this.handleBackHome}/>:''}{this.state.page==='shounen'?<Shounen home={this.handleBackHome}/>:''}{this.state.page==='thriller'?<Thriller home={this.handleBackHome}/>:''}{this.state.page==='other'?<Other home={this.handleBackHome}/>:''}{this.state.page==='home'?<div><Platform onChange={this.handlePlatformSelect}>What streaming platform would you like to use?<br></br><input type='radio' name='platform' value='netflix'/>Netflix<input type='radio' name='platform' value='hulu'/>Hulu<input type='radio' name='platform' value='crunchyroll'/>Crunchyroll</Platform>{this.state.platform === 'netflix' || this.state.platform === 'hulu' ?<PickStyle onChange={this.handleGenreSelect}>What genre do you prefer? <br></br><input type='radio' name='genre' value='action'/>{this.state.genres[0].name}<input type='radio' name='genre' value='anime'/>{this.state.genres[1].name}<input type='radio' name='genre' value='comedy'/>{this.state.genres[2].name}<input type='radio' name='genre' value='crime'/>{this.state.genres[3].name}<input type='radio' name='genre' value='drama'/>{this.state.genres[4].name}<input type='radio' name='genre' value='reality'/>{this.state.genres[5].name}</PickStyle>:''}{this.state.platform === 'crunchyroll' || this.state.genrePreferece === 'anime' ? <PickStyle onChange={this.handleSubgenreSelect}>What subgenre do you prefer? <br></br><input type='radio' name='sub' value='romance'/>{this.state.subgenres[0].name}<input type='radio' name='sub' value='seinen'/>{this.state.subgenres[1].name}<input type='radio' name='sub' value='shounen'/>{this.state.subgenres[2].name}<input type='radio' name='sub' value='thriller'/>{this.state.subgenres[3].name}<input type='radio' name='sub' value='other'/>{this.state.subgenres[4].name}</PickStyle>:''}<PickStyle onChange={this.handleLengthSelect}>Would you like a shorter or longer series? <br></br><input type='radio' name='length' value='short'/>Short<input type='radio' name='length'value='intermediate'/>Intermediate<input type='radio' name='length' value='long'/>Long</PickStyle><button onClick={this.handleSubmit}>Get recommendation</button></div>:''}</RightStyle></Body></Web>);}
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
  width: 44%;
  cursor: pointer;
  &:hover {
    color: #74cc66;
  }
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
var Platform = styled.div`
  margin-bottom: 15px;
`;
var PickStyle = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default App;