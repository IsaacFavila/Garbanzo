import React from 'react';
import styled from 'styled-components';

const GenreList = (props) => (
  <div className='genreborder'>{props.show === false ? <div className='genrehead' onClick={props.dropdown}>Genre favorites +</div>:<div><div className='genrehead' onClick={props.dropdown}>Genre favorites -</div><div className='genretext' onClick={props.action}>{props.genres[0].genre}</div><div className='genretext' onClick={props.comedy}>{props.genres[1].genre}</div><div className='genretext' onClick={props.crime}>{props.genres[2].genre}</div><div className='genretext' onClick={props.drama}>{props.genres[3].genre}</div><div className='genretext' onClick={props.reality}>{props.genres[4].genre}</div></div>}</div>
);

export default GenreList;