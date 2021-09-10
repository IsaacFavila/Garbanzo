import react from 'react';

const GenreListEntry = (props) => (
  <div className='genre-entry'>
    <li>
      <a>{props.genre}</a>
    </li>
  </div>
)

export default GenreListEntry;