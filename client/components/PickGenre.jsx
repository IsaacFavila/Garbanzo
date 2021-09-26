import React from 'react';
import styled from 'styled-components';

const PickGenre = (props) => (
  <PickGenreStyle>What genre do you prefer? <br></br>
    <input type='radio' name='genre'/>{props.genres[0].name}
    <input type='radio' name='genre'/>{props.genres[1].name}
    <input type='radio' name='genre'/>{props.genres[2].name}
    <input type='radio' name='genre'/>{props.genres[3].name}
    <input type='radio' name='genre'/>{props.genres[4].name}
    <input type='radio' name='genre'/>{props.genres[5].name}
  </PickGenreStyle>
);


var PickGenreStyle = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;
export default PickGenre;