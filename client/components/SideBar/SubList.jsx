import React from 'react';
import styled from 'styled-components';

const SubList = (props) => (
  <div class='genreborder'>{props.show === false ? <div className='genrehead' onClick={props.dropdown}>Subgenre favorites +</div>:<div><div className='genrehead' onClick={props.dropdown}>Subgenre favorites -</div><div className='genretext' onClick={props.romance}>{props.subgenres[0].subgenre}</div><div className='genretext' onClick={props.seinen}>{props.subgenres[1].subgenre}</div><div className='genretext' onClick={props.shounen}>{props.subgenres[2].subgenre}</div><div className='genretext' onClick={props.other}>{props.subgenres[3].subgenre}</div><div className='genretext' onClick={props.thriller}>{props.subgenres[4].subgenre}</div></div>}</div>
);

export default SubList;