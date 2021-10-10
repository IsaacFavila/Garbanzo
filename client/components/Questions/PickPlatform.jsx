import React from 'react';
import styled from 'styled-components';

class PickPlatform extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Platform>What streaming platform would you like to use?<br></br>
        <input type='radio'/>Netflix
        <input type='radio'/>Hulu
        <input type='radio'/>Crunchyroll
      </Platform>

    );
  }
}

var Platform = styled.div`
  margin-bottom: 15px;
`;
export default PickPlatform;