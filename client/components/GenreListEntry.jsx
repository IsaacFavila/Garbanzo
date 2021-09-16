import React from 'react';
import styled from 'styled-components';

const GenreListEntry = (props) => (
  <GenreEntryStyle>
    <u>{props.genre}</u>
  </GenreEntryStyle>
)

var GenreEntryStyle = styled.div`
  margin-bottom: 25px;
  cursor: default;
`;

export default GenreListEntry;