import React from 'react';
import styled from 'styled-components';

const GenreListEntry = (props) => (
  <GenreEntryStyle>{props.genre}</GenreEntryStyle>
)

var GenreEntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

export default GenreListEntry;