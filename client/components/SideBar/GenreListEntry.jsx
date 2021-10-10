import React from 'react';
import styled from 'styled-components';
const GenreListEntry = ({genre}) => (<EntryStyle>{genre}</EntryStyle>)
var EntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #74cc66;
  }
`;
export default GenreListEntry;