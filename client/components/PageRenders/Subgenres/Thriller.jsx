import React from 'react';
import styled from 'styled-components';
import GenreShow from '../GenreShow.jsx';

const Thriller = ({home, shows}) => (
  <div>
    <Header>Thriller</Header>
    <Shows>
    {shows.map((show) => <S><GenreShow name={show.name} link={show.link} key={show.id}/></S>)}<br></br>
    </Shows>
    <button onClick={home}>Back to home</button>
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

export default Thriller;