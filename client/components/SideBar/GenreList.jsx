import React from 'react';
import GenreListEntry from './GenreListEntry.jsx';
import styled from 'styled-components';

const GenreList = ({genres, show, dropdown}) => (<GenreStyle>{show === false ? <H onClick={dropdown}>Genre examples +</H>:<div><H onClick={dropdown}>Genre examples -</H><List>{genres.map((genre) => <GenreListEntry genre={genre.name} key={genre.id}/>)}</List></div>}</GenreStyle>)

var H = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
`;

var GenreStyle = styled.div`
border-bottom: solid 1px;
`;

var List = styled.div`
  text-align: center;
`;

export default GenreList;