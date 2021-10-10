import React from 'react';
import styled from 'styled-components';

const SubList = (props) => (<SubStyle>{props.show === false ? <H onClick={props.dropdown}>Subgenres explained +</H>:<div><H onClick={props.dropdown}>Subgenres explained -</H><List><EntryStyle onClick={props.romance}>{props.subgenres[0].name}</EntryStyle><EntryStyle onClick={props.seinen}>{props.subgenres[1].name}</EntryStyle><EntryStyle onClick={props.shounen}>{props.subgenres[2].name}</EntryStyle><EntryStyle onClick={props.thriller}>{props.subgenres[3].name}</EntryStyle><EntryStyle onClick={props.other}>{props.subgenres[4].name}</EntryStyle></List></div>}</SubStyle>)

var H = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
`;

var SubStyle = styled.div`
  border: solid 1px;
`;

var EntryStyle = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #74cc66;
  }
`;

var List = styled.div`
  text-align: center;
`;
export default SubList;