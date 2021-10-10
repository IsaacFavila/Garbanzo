import React from 'react';
import styled from 'styled-components';

const SubListEntry = ({subgenre}) => (<EntryStyle>{subgenre}</EntryStyle>)

var EntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #74cc66;
  }
`;
export default SubListEntry;