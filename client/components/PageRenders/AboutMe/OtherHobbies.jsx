import React from 'react';
import styled from 'styled-components';

const Hobbies = ({home}) => (
  <div>
    <h3>MAL</h3>
    <div>If you are curious, here is my other anime related information.</div>
    <ul>
    <li>
    <Text href='https://myanimelist.net/profile/bumfavbumbum' target='_blank' rel="noopener noreferrer">MyAnimeList Profile</Text>
    </li>
    <li>
    <Text href='https://anime.plus/bumfavbumbum/ratings,anime' target='_blank' rel="noopener noreferrer">Rating Breakdown</Text>
    </li>
    <li>
    <Text href='https://open.spotify.com/playlist/4qL0QsTVoR9BMtCRtbV4I9?si=7346fb31a19d4759' target='_blank' rel="noopener noreferrer">Spotify Playlist</Text>
    </li>
    </ul>
    <br></br>
    <button onClick={home}>Back to home</button>
  </div>
);

var Text = styled.a`
  color: #d4b5a9;
  margin-bottom: 15px;
  &:hover {
    color: #74cc66;
  }
`;

export default Hobbies;