import React from 'react';
import styled from 'styled-components';
import Show from './Show.jsx';

const About = ({home, shows}) => (
 <div>
    <div>
    I like to watch TV shows, anime, and the occasional movie. Netflix, Crunchyroll, and Hulu are my most used streaming platforms. I have used Disney+, HBO Max, and Amazon Prime, but not nearly as much. I am not that picky, and will watch whatever I find interesting.
    </div>
    <div className='aboutflex'>
      <div className='aboutcenter'>
        <h3>Favorites</h3>
        {shows.map((show) => <div>
          {show.status === 'favorite'?<Show name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </div>
      <div className='aboutcenter'>
        <h3>Watching</h3>
        {shows.map((show) => <div>
          {show.status === 'watching'?<Show name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </div>
      <div className='aboutcenter'>
        <h3>Recent</h3>
        {shows.map((show) => <div>
          {show.status === 'recent'?<Show name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </div>
      <div className='aboutcenter'>
        <h3>Plan to Watch</h3>
        {shows.map((show) => <div>
          {show.status === 'plan'?<Show name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/>:''}</div>)}
      </div>
    </div><br></br>
   <div>
      <button onClick={home}>Back to home</button>
   </div>
 </div>
);

export default About;
