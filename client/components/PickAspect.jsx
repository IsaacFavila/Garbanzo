import React from 'react';
import styled from 'styled-components';

class PickAspect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aspect: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render () {
    return (
      <PickAspectStyle>What aspect sounds most interesting? <br></br>
        <input type='radio' name='length'/>Animation
        <input type='radio' name='length'/>Storyline
        <input type='radio' name='length'/>Character development
        <input type='radio' name='length'/>Message
        <input type='radio' name='length'/>No preference
      </PickAspectStyle>

    );
  }
}

var PickAspectStyle = styled.div`
  margin-bottom: 15px;
`;

export default PickAspect;