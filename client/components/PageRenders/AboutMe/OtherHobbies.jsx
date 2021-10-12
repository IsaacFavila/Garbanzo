import React from 'react';
import styled from 'styled-components';

const Hobbies = ({home}) => (
  <div>
  <div>Every once in a blue moon I will upload a youtube video. Here is my latest video.</div>
  <iframe width="572" height="400" src="https://www.youtube.com/embed/v29OGudJ7cg?autoplay=1&start=35&mute=1" frameborder="0" allowfullscreen></iframe><br></br>
  <button onClick={home}>Back to home</button>
  </div>
);

export default Hobbies;