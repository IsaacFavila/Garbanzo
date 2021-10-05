import React from 'react';
import styled from 'styled-components';

const AboutMe = (props) => (
  <AboutMeStyle>
    <Text onClick={props.about}>About me</Text>
  </AboutMeStyle>
);


var AboutMeStyle = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

var Text = styled.div`
  cursor: pointer;
  vertical-align: middle;
  text-decoration: underline;
`;

export default AboutMe;