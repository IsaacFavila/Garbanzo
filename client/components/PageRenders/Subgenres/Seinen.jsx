import React from 'react';
import styled from 'styled-components';

const Seinen = ({home, shows}) => (
  <div>
    <Header>Seinen</Header>
    <Shows>
    {shows.map((show) => <Show key={show.id}>{show.name}</Show>)}<br></br>
    </Shows>
    <button onClick={home}>Back to home</button>
  </div>
);

var Header = styled.h3`
  margin-top: -2px;
`;

var Shows = styled.div`
  display: flex;
  justify-content: space-between;
`;

var Show = styled.a`
  margin 10px auto;
  &:hover {
    color: #74cc66;
  }
`;

export default Seinen;