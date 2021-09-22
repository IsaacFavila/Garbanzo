import React from 'react';
import styled from 'styled-components';

class PickGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render () {
    return (
      <PickGenreStyle>What genre do you prefer? <br></br>
        <input type='radio' name='genre'/>{this.props.genres[0].name}
        <input type='radio' name='genre'/>{this.props.genres[1].name}
        <input type='radio' name='genre'/>{this.props.genres[2].name}
        <input type='radio' name='genre'/>{this.props.genres[3].name}
        <input type='radio' name='genre'/>{this.props.genres[4].name}
      </PickGenreStyle>

    );
  }
}

var PickGenreStyle = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;
export default PickGenre;