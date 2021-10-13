import React from 'react';
import styled from 'styled-components';
import GenreShow from './GenreShow.jsx';

const Results = ({home, random, shows}) => (
  <div>
    <h3>Result(s)</h3>
    <Shows>
    {shows.map((show) => <S><GenreShow name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/></S>)}<br></br>
    </Shows>
    <button onClick={home}>New recommendation</button>
    <button onClick={random}>Random</button>
  </div>
);


var Shows = styled.div`
  display: flex;
  justify-content: space-between;
`;
var S = styled.div`
  margin 10px auto;
`;

export default Results;