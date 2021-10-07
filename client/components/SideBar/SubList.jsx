import React from 'react';
import styled from 'styled-components';
import SubListEntry from './SubListEntry.jsx';

const SubList = ({subgenres, show, dropdown}) => (
  <div>{show === false ? <H onClick={dropdown}>Subgenres explained +</H>:<div><H onClick={dropdown}>Subgenres explained -</H><List>{subgenres.map((subgenre) => <SubListEntry subgenre={subgenre.name} key={subgenre.id}/>)}</List></div>}</div>
)

var H = styled.div`
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
`;
var List = styled.div`
  text-align: center;
`;

export default SubList;