import React from 'react';
import styled from 'styled-components';

const About = ({home}) => (
 <div>
    <Top>
      <div>
      I like to watch TV shows, anime, and the occasional movie. Netflix, Crunchyroll, and Hulu are my most used streaming platforms. I have used Disney+, HBO Max, and Amazon Prime, but not nearly as much. I am not that picky, and will watch whatever I find interesting.
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
    <Favorites><u>Favorites</u>
      <div>Queen's Gambit</div>
      <div>Steins Gate</div>
      <div>Brooklyn Nine-Nine</div>
    </Favorites>
    <Current><u>Currently Watching</u>
      <div>The Witcher</div>
      <div>One Piece</div>
      <div>-</div>
    </Current>
    <Recent><u>Recently Completed</u>
      <div>Lucifer</div>
      <div>My Hero S5</div>
      <div>Are You the One S4 </div>
    </Recent>
    <PTW><u>Plan to watch</u>
      <div>Squid Game</div>
      <div>Demon Slayer S2</div>
      <div>-</div>
    </PTW>
   </Body><br></br>
   <Body>
      <div>Favorite movies</div>
   </Body><br></br>
   <Body>
      <div onClick={home}>Back to home</div>
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
var PTW = styled.div``;


export default About;
