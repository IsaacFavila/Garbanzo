import React from 'react';
import styled from 'styled-components';
import GenreShow from './GenreShow.jsx';

const Results = ({home, shows}) => (
  <div>
    <Header>Results</Header>
    <Shows>
    {shows.map((show) => <S><GenreShow name={show.name} platform={show.platform} image={show.image} link={show.link} key={show.id}/></S>)}<br></br>
    </Shows>
    <button onClick={home}>Get a new recommendation</button>
  </div>
);

var Header = styled.h3`
  margin-top: -2px;
`;
var Shows = styled.div`
  display: flex;
  justify-content: space-between;
`;
var S = styled.div`
  margin 10px auto;
`;

export default Results;