import React from 'react';
import styled from 'styled-components';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
      link: this.props.link,
      platform: this.props.platform[0].toUpperCase() + this.props.platform.slice(1)
    };
  }

  render() {
    return(
      <Container>
        <ImageContainer>
        <Image src={this.state.image}/>
        </ImageContainer>
        <Text href={this.state.link} target='_blank' rel="noopener noreferrer" >{this.state.name}</Text>
        <Platform>Available on {this.state.platform}</Platform>
      </Container>
    );
  }
}

var Text = styled.a`
  font-size: 12px;
  color: black;
  &:hover {
    color: blue;
  }
`;
var ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
var Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

var Container = styled.div`
  margin: 15px auto;
  background-image: linear-gradient(120deg, #e2dd3f, #a06468);
  width: 125px;
  justify-content: center;
  text-align:center;
  align-items: center;
`;
var Platform = styled.div`
  font-size: 10px;
  color: black;
`;

export default Show;