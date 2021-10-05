import React from 'react';
import GenreList from './components/SideBar/GenreList.jsx';
import genreData from './data/genreData.js';
import AboutMe from './components/SideBar/AboutMe.jsx';
import About from './components/PageRenders/About.jsx';
import styled from 'styled-components';
import PickPlatform from './components/PickPlatform.jsx';
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
    this.handleAboutMe = this.handleAboutMe.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
  }
  // functions
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
  render () {
    return (
    <Web>
      <Title>
        <Garbanzo onClick={this.handleBackHome}>laughingGarbanzo
          </Garbanzo>
      </Title>

      {/* Left Side */}
      <Body>

        <LeftStyle>
          <AboutMe about={this.handleAboutMe}/>
          <GenreList genres={this.state.genres}/>
        </LeftStyle>


      {/* Conditional Right Side */}
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