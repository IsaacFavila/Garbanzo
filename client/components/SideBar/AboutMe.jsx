import React from 'react';
import styled from 'styled-components';

const AboutMe = (props) => (
  <AboutMeStyle>
    <Text onClick={props.about}>About me</Text>
  </AboutMeStyle>
);


var AboutMeStyle = styled.div`
  text-align: center;
  background: #d4b5a9;
  height: 10%;
  font-size: 25px;
`;

var Text = styled.div`
  cursor: pointer;
  vertical-align: middle;
`;

export default AboutMe;