import React from 'react';
import styled from 'styled-components';

const Action = ({home, shows}) => (
  <div>
    <h3>Action</h3>
    {shows.map((show) => <a key={show.id}>{show.name}</a>)}<br></br>
    <button onClick={home}>Back to home</button>
  </div>
);

export default Action;