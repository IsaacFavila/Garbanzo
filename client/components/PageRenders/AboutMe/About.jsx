import React from 'react';
import styled from 'styled-components';
import Show from '../Show.jsx';

const About = ({home, shows}) => (
 <div>
    <div>
    I like to watch TV shows, anime, and the occasional movie. Netflix, Crunchyroll, and Hulu are my most used streaming platforms. I have used Disney+, HBO Max, and Amazon Prime, but not nearly as much. I am not that picky, and will watch whatever I find interesting.
    </div>
    <MAL>
      <Text href='https://myanimelist.net/profile/bumfavbumbum' target='_blank' rel="noopener noreferrer">MyAnimeList Profile</Text>
      <Bar>|</Bar>
      <Text href='https://anime.plus/bumfavbumbum/ratings,anime' target='_blank' rel="noopener noreferrer">Rating Breakdown</Text>
    </MAL>
    <Flex>
      <div>
        <h3>Platform</h3>
        <Netflix>Netflix</Netflix>
        <Crunchyroll>Crunchyroll</Crunchyroll>
        <Hulu>Hulu</Hulu>
      </div>
      <Center>
        <h3>Favorites</h3>
        {shows.map((show) => <div>
          {show.status === 'favorite'?<Show name={show.name} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </Center>
      <Center>
        <h3>Currently Watching</h3>
        {shows.map((show) => <div>
          {show.status === 'watching'?<Show name={show.name} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </Center>
      <Center>
        <h3>Recently Completed</h3>
        {shows.map((show) => <div>
          {show.status === 'recent'?<Show name={show.name} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </Center>
      <Center>
        <h3>Plan to Watch</h3>
        {shows.map((show) => <div>
          {show.status === 'plan'?<Show name={show.name} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </Center>
    </Flex><br></br>
   <Body>
      <button onClick={home}>Back to home</button>
   </Body>
 </div>
);


var Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

var MAL = styled.div`
  display: flex;
  justify-content: flex-end;
`;

var Center = styled.div`
  justify-content: center;
  text-align: center;
`;

var Body = styled.div`
  display: flex;
`;
var Bar = styled.div`
font-size: 12px;
  margin-right: 5px;
  margin-left: 5px;
`;

var Crunchyroll = styled.div`
  color: orange;
  margin-bottom: 15px;
`;
var Netflix = styled.div`
  color: red;
  margin-bottom: 15px;
`;
var Hulu = styled.div`
  color: green;
  margin-bottom: 15px;
`;
var Text = styled.a`
  font-size: 12px;
  color: #d4b5a9;
  &:hover {
    color: #74cc66;
  }
`;
export default About;
