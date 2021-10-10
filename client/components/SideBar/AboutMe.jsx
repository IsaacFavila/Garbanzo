import React from 'react';
import styled from 'styled-components';

const AboutMe = ({about, show, dropdown}) => (<AboutStyle>{show === false ? <Text onClick={dropdown}>About me +</Text> : <div><Text onClick={dropdown}>About me -</Text><Subtext onClick={about}>Credentials</Subtext><Subtext>Other hobbies</Subtext></div>}</AboutStyle>);

var AboutStyle = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
  border-bottom: solid 1px;
`;

var Text = styled.div`
  cursor: pointer;
  vertical-align: middle;
  margin-bottom: 15px;
`;
var Subtext = styled.div`
  cursor: pointer;
  vertical-align: middle;
  margin-bottom: 15px;
  font-size:12px;
  &:hover {
    color: #74cc66;
  }
`;

export default AboutMe;