import React from 'react';
import styled from 'styled-components';
import SubListEntry from './SubListEntry.jsx';

const SubList = ({subgenres, show, dropdown}) => (<SubStyle>{show === false ? <H onClick={dropdown}>Subgenres explained +</H>:<div><H onClick={dropdown}>Subgenres explained -</H><List>{subgenres.map((subgenre) => <SubListEntry subgenre={subgenre.name} key={subgenre.id}/>)}</List></div>}</SubStyle>)

var H = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
`;

var SubStyle = styled.div`
border-bottom: solid 1px;
`;

var List = styled.div`
  text-align: center;
`;
export default SubList;