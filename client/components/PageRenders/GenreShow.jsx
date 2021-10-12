import React from 'react';
import styled from 'styled-components';

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      // image: this.props.image,
      link: this.props.link,
      platform: this.props.platform[0].toUpperCase() + this.props.platform.slice(1)
    };
  }

  render() {
    return(
      <Container>
        {/* <img src={this.state.image}/> */}
        <Image>x</Image>
        <Text href={this.state.link} target='_blank' rel="noopener noreferrer" key={this.state.name}>{this.state.name}</Text>
        <Platform>Available on {this.state.platform}</Platform>
      </Container>
    );
  }
}

var Text = styled.a`
  color: #d4b5a9;
  &:hover {
    color: #74cc66;
  }
`;

var Image = styled.div`
  background-color: blue;
  height: 300px;
`;

var Platform = styled.div`
  font-size: 12px;
`;

var Container = styled.div`
  margin-bottom: 15px;
  background-color: black;
  justify-content:center;
  text-align:center;
  width: 200px;
`;

export default GenreShow;