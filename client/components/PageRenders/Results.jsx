import React from 'react';
import styled from 'styled-components';
import GenreShow from './GenreShow.jsx';

const Results = ({home, random, shows}) => (
  <div><h3>Result(s)</h3><div className='Shows'>{shows.map((show) => <div><GenreShow name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/></div>)}<br></br></div><button onClick={home}>New recommendation</button><button onClick={random}>Random</button></div>
);

export default Results;