import React from 'react';
import styled from 'styled-components';

class PickPlatform extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Platform>What streaming platform(s) do you have? (Select all that apply)<br></br>
        <input type='checkbox'/>Netflix
        <input type='checkbox'/>Hulu
        <input type='checkbox'/>Crunchyroll
      </Platform>

    );
  }
}

var Platform = styled.div`
  margin-bottom: 15px;
`;
export default PickPlatform;