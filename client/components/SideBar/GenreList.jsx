import React from 'react';
import GenreListEntry from './GenreListEntry.jsx';
import styled from 'styled-components';

const GenreList = ({genres, show, dropdown}) => (
  <div className='genre-list'>
    {show === false ? <H onClick={dropdown}>Genre examples +</H>:<div><H onClick={dropdown}>Genre examples -</H><List>{genres.map((genre) => <GenreListEntry genre={genre.name} key={genre.id}/>)}</List></div>}
  </div>
)

var H = styled.div`
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
`;
var List = styled.div`
  text-align: center;
`;

export default GenreList;