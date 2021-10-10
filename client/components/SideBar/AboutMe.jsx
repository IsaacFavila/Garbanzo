import React from 'react';
import styled from 'styled-components';

const AboutMe = ({about, hobby, show, dropdown}) => (<AboutStyle>{show === false ? <Text onClick={dropdown}>About me +</Text> : <div><Text onClick={dropdown}>About me -</Text><Subtext onClick={about}>Credentials</Subtext><Subtext onClick={hobby}>Other hobbies</Subtext></div>}</AboutStyle>);

var AboutStyle = styled.div`
  text-align: center;
  cursor: pointer;
  margin-top: 15px;
  border: solid 1px;
`;

var Text = styled.div`
  cursor: pointer;
  vertical-align: middle;
  margin-top:15px;
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