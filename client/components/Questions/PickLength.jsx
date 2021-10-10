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
        <input type='radio' name='length'/>Short
        <input type='radio' name='length'/>Intermediate
        <input type='radio' name='length'/>Long
      </PickLengthStyle>

    );
  }
}

var PickLengthStyle = styled.div`
  margin-bottom: 15px;
`;

export default PickLength;