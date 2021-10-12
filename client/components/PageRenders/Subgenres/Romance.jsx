import React from 'react';
import styled from 'styled-components';

const Romance = ({home, shows}) => (
  <div>{console.log(shows)}
    <h3>Romance</h3>
    {shows.map((show) => <a key={show.id}>{show.name}</a>)}<br></br>
    <button onClick={home}>Back to home</button>
  </div>
);

export default Romance;