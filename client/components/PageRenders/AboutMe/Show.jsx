import React from 'react';
import styled from 'styled-components';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
      link: this.props.link
    };
  }

  render() {
    return(
      <Container>
        {/* <img src={this.state.image}/> */}
        <Text href={this.state.link} target='_blank' rel="noopener noreferrer" >{this.state.name}</Text>
      </Container>
    );
  }
}

var Text = styled.a`
  font-size: 12px;
  color: #d4b5a9;
  &:hover {
    color: #74cc66;
  }
`;

var Container = styled.div`
  margin-bottom: 15px;
`;

export default Show;