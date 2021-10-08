import React from 'react';
import styled from 'styled-components';

const SubListEntry = ({subgenre}) => (<EntryStyle>{subgenre}</EntryStyle>)

var EntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;
export default SubListEntry;