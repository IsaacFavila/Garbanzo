import React from 'react';
import styled from 'styled-components';
import GenreShow from '../GenreShow.jsx';

const Romance = ({home, shows}) => (
  <div>
    <h3>Romance</h3>
    <div className='Shows'>{shows.map((show) => <div><GenreShow name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/></div>)}<br></br></div>
    <button onClick={home}>Back to home</button>
  </div>
);


export default Romance;