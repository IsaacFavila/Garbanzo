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
      <div className='credcontainer'>
      <div className='imagecontainer'>
      <img className='image' src={this.state.image}/>
      </div>
      <a className='credimg' href={this.state.link} target='_blank' rel="noopener noreferrer" key={this.state.name}>{this.state.name}</a>
      <div className='credplat'>Available on {this.state.platform}</div>
    </div>
    );
  }
}

export default Show;