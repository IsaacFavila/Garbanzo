import React from 'react';
import styled from 'styled-components';
import Show from '../Show.jsx';

const About = ({home, shows}) => (
 <div>
    <div>
    I like to watch TV shows, anime, and the occasional movie. Netflix, Crunchyroll, and Hulu are my most used streaming platforms. I have used Disney+, HBO Max, and Amazon Prime, but not nearly as much. I am not that picky, and will watch whatever I find interesting.
    </div>
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
var Center = styled.div`
  justify-content: center;
  text-align: center;
`;
var Body = styled.div`
  display: flex;
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

export default About;
