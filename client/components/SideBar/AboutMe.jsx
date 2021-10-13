import React from 'react';
import styled from 'styled-components';

const AboutMe = ({about, hobby, show, dropdown}) => (
  <div className='about'>{show === false ? <div className='abouttext' onClick={dropdown}>About me +</div> : <div><div className='abouttext' onClick={dropdown}>About me -</div><div className='aboutsub' onClick={about}>Watch Activity</div><div className='aboutsub' onClick={hobby}>MyAnimeList</div></div>}</div>
);

export default AboutMe;