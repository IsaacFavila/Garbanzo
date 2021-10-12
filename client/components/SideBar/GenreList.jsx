import React from 'react';
import styled from 'styled-components';

const GenreList = (props) => (<GenreStyle>{props.show === false ? <H onClick={props.dropdown}>Genre favorites +</H>:<div><H onClick={props.dropdown}>Genre favorites -</H><List><EntryStyle onClick={props.action}>{props.genres[0].genre}</EntryStyle><EntryStyle onClick={props.comedy}>{props.genres[1].genre}</EntryStyle><EntryStyle onClick={props.crime}>{props.genres[2].genre}</EntryStyle><EntryStyle onClick={props.drama}>{props.genres[3].genre}</EntryStyle><EntryStyle onClick={props.reality}>{props.genres[4].genre}</EntryStyle></List></div>}</GenreStyle>)

var H = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
  &:hover {
    color: #74cc66;
  }
`;

var GenreStyle = styled.div`
  border: solid 1px;
`;
var EntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #74cc66;
  }
`;
var List = styled.div`
  text-align: center;
`;

export default GenreList;