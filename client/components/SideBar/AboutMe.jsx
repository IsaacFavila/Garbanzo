import React from 'react';
import styled from 'styled-components';

const AboutMe = ({about, show, dropdown}) => (<AboutStyle>{show === false ? <Text onClick={dropdown}>About me +</Text> : <div><Text onClick={dropdown}>About me -</Text><Text onClick={about}>Credentials</Text><Text>Other hobbies</Text></div>}</AboutStyle>);

var AboutStyle = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 15px;
`;

var Text = styled.div`
  cursor: pointer;
  vertical-align: middle;
  margin-bottom: 15px;
`;

export default AboutMe;