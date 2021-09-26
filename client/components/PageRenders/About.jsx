import React from 'react';
import styled from 'styled-components';

const About = (props) => (
 <div>
    <Top>
      <div onClick={props.home}>Back to home</div>

      <div>
      In my free time, I like to watch TV shows, anime, and movies. Netflix, Crunchyroll, and Hulu are my most used stream platforms. As you can probably tell, my taste is all over the place. I will watch whatever I find interesting. I do have a MyAnimeList account.
      </div>
    </Top>

   <Body>
    <Services>
      <br></br>
      <Netflix>Netflix</Netflix>
      <Crunchyroll>Crunchyroll</Crunchyroll>
      <Hulu>Hulu</Hulu>
    </Services>
    <Current>Currently Watching
      <div>Lucifer</div>
      <div>One piece</div>
      <div>-</div>
    </Current>
    <Recent>Recently Completed
      <div>Outer Banks S2</div>
      <div>Tokyo Revengers</div>
      <div>Are You the One S4 </div>
    </Recent>
    <Favorites>Favorites
      <div>Vampire Diares</div>
      <div>Steins Gate</div>
      <div>Brooklyn Nine-Nine</div>
    </Favorites>

   </Body>
 </div>
);


var Top = styled.div`
  display: flex;
`;
var Body = styled.div`
  display: flex;
  justify-content: space-between;
`;
var Services = styled.div``;

var Crunchyroll = styled.div`
  color: orange;
`;
var Netflix = styled.div`
  color: red;
`;
var Hulu = styled.div`
  color: green;
`;

var Current = styled.div``;
var Recent = styled.div``;
var Favorites = styled.div``;


export default About;
