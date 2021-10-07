import React from 'react';
import styled from 'styled-components';

class PickLength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render () {
    return (
      <PickLengthStyle>Would you like to a shorter or longer series? <br></br>
        <input type='radio' name='length'/>Shorter
        <input type='radio' name='length'/>In the middle
        <input type='radio' name='length'/>Longer
        {/* <input type='radio' name='length'/>Short (11-27 eps)
        <input type='radio' name='length'/>Intermediate (26-75 eps)
        <input type='radio' name='length'/>Long (75+ eps)
        <input type='radio' name='length'/>No preference */}
      </PickLengthStyle>

    );
  }
}

var PickLengthStyle = styled.div`
  margin-bottom: 15px;
`;

export default PickLength;