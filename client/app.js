import React from 'react';
import styled from 'styled-components';
import AboutMe from './components/SideBar/AboutMe.jsx';
import GenreList from './components/SideBar/GenreList.jsx';
import SubList from './components/SideBar/SubList.jsx';
import About from './components/PageRenders/AboutMe/About.jsx';
import Hobbies from './components/PageRenders/AboutMe/OtherHobbies.jsx';
import Action from './components/PageRenders/Genres/Action.jsx';
import Comedy from './components/PageRenders/Genres/Comedy.jsx';
import Crime from './components/PageRenders/Genres/Crime.jsx';
import Drama from './components/PageRenders/Genres/Drama.jsx';
import Reality from './components/PageRenders/Genres/Reality.jsx';
import Romance from './components/PageRenders/Subgenres/Romance.jsx';
import Seinen from './components/PageRenders/Subgenres/Seinen.jsx';
import Shounen from './components/PageRenders/Subgenres/Shounen.jsx';
import Thriller from './components/PageRenders/Subgenres/Thriller.jsx';
import Other from './components/PageRenders/Subgenres/Other.jsx';
import Results from './components/PageRenders/Results.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      genres: [],
      subgenres: [],
      showGenres: false,
      showSubgenres: false,
      showAboutMe: false,
      platform: null,
      genrePreferece: null,
      subgenrePreference: null,
      length: null,
      search: {},
      credentials: [],
      genreFavorites: [],
      subgenreFavorites: [],
      results: []
    }
    this.handleAboutMe = this.handleAboutMe.bind(this);
    this.handleHobby = this.handleHobby.bind(this);
    this.handleAction = this.handleAction.bind(this);
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
    this.handleRandom = this.handleRandom.bind(this);
    this.getCredentials = this.getCredentials.bind(this);
    this.getGenreFavorites = this.getGenreFavorites.bind(this);
    this.getSubgenreFavorites = this.getSubgenreFavorites.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.getSubgenres = this.getSubgenres.bind(this);
  }
  componentDidMount() {
    this.getGenres();
    this.getSubgenres();
    this.getCredentials();
    this.getGenreFavorites();
    this.getSubgenreFavorites();
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
    if (this.state.search.subgenre && this.state.search.genre !== 'Anime' && this.state.search.platform !== 'crunchyroll') {
      delete this.state.search.subgenre;
    }
    if (this.state.search.genre && this.state.search.platform === 'crunchyroll') {
      delete this.state.search.genre;
    }
    if (this.state.search.length === 'none') {
      delete this.state.search.length;
    }
    axios.get('/suggestions', {params: this.state.search})
      .then(({data}) => {
        this.setState({
          results: data
        })
      })
      .then((response) => {
        this.setState({
          page: 'results'
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  handleRandom() {
    axios.get('/random')
    .then(({data}) => {
      this.setState({
        results: data
      })
    })
    .then((response) => {
      this.setState({
        page: 'results'
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  getCredentials() {
    axios.get('/credentials')
      .then(({data}) => {
        this.setState({
          credentials: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  getGenreFavorites() {
    axios.get('/genreFavorites')
      .then(({data}) => {
        this.setState({
          genreFavorites: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  getSubgenreFavorites() {
    axios.get('/subgenreFavorites')
      .then(({data}) => {
        this.setState({
          subgenreFavorites: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  getGenres() {
    axios.get('/genres')
      .then(({data}) => {
        this.setState({
          genres: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  getSubgenres() {
    axios.get('/subgenres')
      .then(({data}) => {
        this.setState({
          subgenres: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render () {
    return (<div><div className='title' onClick={this.handleBackHome}>laughingGarbanzo</div><div className='flex'><div className='left'><AboutMe about={this.handleAboutMe}hobby={this.handleHobby}show={this.state.showAboutMe}dropdown={this.handleAboutMeDropdown}/><GenreList genres={this.state.genres}show={this.state.showGenres}dropdown={this.handleGenreDropdown}action={this.handleAction}anime={this.handleAnime}comedy={this.handleComedy}crime={this.handleCrime}drama={this.handleDrama}reality={this.handleReality}/><SubList subgenres={this.state.subgenres}show={this.state.showSubgenres}dropdown={this.handleSubgenreDropdown}romance={this.handleRomance}seinen={this.handleSeinen}shounen={this.handleShounen}thriller={this.handleThriller}other={this.handleOther}/></div><div className='right'>{this.state.page==='about me'?<About home={this.handleBackHome} shows={this.state.credentials}/>:''}{this.state.page==='hobby'?<Hobbies home={this.handleBackHome}/>:''}{this.state.page==='action'?<Action home={this.handleBackHome} shows={this.state.genreFavorites.slice(0,2)}/>:''}{this.state.page==='comedy'?<Comedy home={this.handleBackHome} shows={this.state.genreFavorites.slice(2,4)}/>:''}{this.state.page==='crime'?<Crime home={this.handleBackHome} shows={this.state.genreFavorites.slice(4,6)}/>:''}{this.state.page==='drama'?<Drama home={this.handleBackHome} shows={this.state.genreFavorites.slice(6,8)}/>:''}{this.state.page==='reality'?<Reality home={this.handleBackHome} shows={this.state.genreFavorites.slice(8)}/>:''}{this.state.page==='romance'?<Romance home={this.handleBackHome} shows={this.state.subgenreFavorites.slice(0,3)}/>:''}{this.state.page==='seinen'?<Seinen home={this.handleBackHome} shows={this.state.subgenreFavorites.slice(3,6)}/>:''}{this.state.page==='shounen'?<Shounen home={this.handleBackHome} shows={this.state.subgenreFavorites.slice(6,9)}/>:''}{this.state.page==='other'?<Other home={this.handleBackHome} shows={this.state.subgenreFavorites.slice(9,12)}/>:''}{this.state.page==='thriller'?<Thriller home={this.handleBackHome} shows={this.state.subgenreFavorites.slice(12)}/>:''}{this.state.page==='results'?<Results home={this.handleBackHome} random={this.handleRandom} shows={this.state.results}/>:''}{this.state.page==='home'?<div><div className='platform' onChange={this.handlePlatformSelect}>What streaming platform would you like to use?<br></br><input type='radio' name='platform' value='netflix'/>Netflix<input type='radio' name='platform' value='hulu'/>Hulu<input type='radio' name='platform' value='crunchyroll'/>Crunchyroll</div>{this.state.platform === 'netflix' || this.state.platform === 'hulu' ?<div className='question' onChange={this.handleGenreSelect}>What genre do you prefer? <br></br><input type='radio' name='genre' value='Action'/>{this.state.genres[0].genre}<input type='radio' name='genre' value='Anime'/>Anime<input type='radio' name='genre' value='Comedy'/>{this.state.genres[1].genre}<input type='radio' name='genre' value='Crime'/>{this.state.genres[2].genre}<input type='radio' name='genre' value='Drama'/>{this.state.genres[3].genre}<input type='radio' name='genre' value='Reality'/>{this.state.genres[4].genre}</div>:''}{this.state.platform === 'crunchyroll' || this.state.genrePreferece === 'Anime' ? <div className='question' onChange={this.handleSubgenreSelect}>What subgenre do you prefer? <br></br><input type='radio' name='sub' value='Romance'/>{this.state.subgenres[0].subgenre}<input type='radio' name='sub' value='Seinen'/>{this.state.subgenres[1].subgenre}<input type='radio' name='sub' value='Shounen'/>{this.state.subgenres[2].subgenre}<input type='radio' name='sub' value='Slice of Life'/>{this.state.subgenres[3].subgenre}<input type='radio' name='sub' value='Thriller'/>{this.state.subgenres[4].subgenre}</div>:''}<div className='question' onChange={this.handleLengthSelect}>Would you like a shorter or longer series? <br></br><input type='radio' name='length' value='short'/>Shorter<input type='radio' name='length' value='long'/>Longer<input type='radio' name='length' value='none'/>No preference</div><button onClick={this.handleSubmit}>Recommendation</button><button onClick={this.handleRandom}>Random</button></div>:''}</div></div></div>);}
}

export default App;