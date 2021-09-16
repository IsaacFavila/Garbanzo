import React from 'react';
import styled from 'styled-components';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Hello');
  }

  render () {
    return (
      <AboutMeStyle>
        <div onClick={this.handleClick}>About me</div>
      </AboutMeStyle>
    )
  }
}

var AboutMeStyle = styled.div`
  cursor: default;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

export default AboutMe;