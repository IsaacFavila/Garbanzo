import React from 'react';
import GenreListEntry from './GenreListEntry.jsx';

const GenreList = ({genres}) => (
  <div className='genre-list'>
    <header>Genres explained </header>
    <ul>
      {genres.map((genre) => <GenreListEntry genre={genre.name} key={genre.id}/>)}
    </ul>
  </div>
)

export default GenreList;