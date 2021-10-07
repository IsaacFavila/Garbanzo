import React from 'react';
import styled from 'styled-components';

const SubListEntry = (props) => (
  <SubEntryStyle>{props.subgenre}</SubEntryStyle>
)

var SubEntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

export default SubListEntry;