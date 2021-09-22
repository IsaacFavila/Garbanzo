import React from 'react';
import GenreListEntry from './GenreListEntry.jsx';
import styled from 'styled-components';

const GenreList = ({genres}) => (
  <div className='genre-list'>
    <H>Genres</H>
    <List>
      {genres.map((genre) => <GenreListEntry genre={genre.name} key={genre.id}/>)}
    </List>
  </div>
)

var H = styled.div`
  text-align: center;
`;
var List = styled.ul`
  justify-content: center;
`;

export default GenreList;