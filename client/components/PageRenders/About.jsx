import React from 'react';
import styled from 'styled-components';

const About = (props) => (
 <div>
    <Top>
      <div>
      I like to watch TV shows, anime, and movies. Netflix, Crunchyroll, and Hulu are my most used stream platforms. I have used Disney+, HBO Max, and Amazon Prime, but not nearly as much. As you can probably tell, my taste is all over the place. I will watch whatever I find interesting.
      </div>
    </Top>
    <br></br>
   <Body>
    <Services>
      <br></br>
      <Netflix>Netflix</Netflix>
      <Crunchyroll>Crunchyroll</Crunchyroll>
      <Hulu>Hulu</Hulu>
    </Services>
    <Current><u>Currently Watching</u>
      <div>The Witcher</div>
      <div>One Piece</div>
      <div>-</div>
    </Current>
    <Recent><u>Recently Completed</u>
      <div>Squid Game</div>
      <div>Tokyo Revengers</div>
      <div>Are You the One S4 </div>
    </Recent>
    <Favorites><u>Favorites</u>
      <div>Queen's Gambit</div>
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
