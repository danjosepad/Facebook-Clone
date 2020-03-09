import React, { Component } from 'react';

import { PostHeader } from './styles';

class PostHeader extends Component {
  render() {
    const { data } = this.props

    return(
    <>
    <PostHeader>
        <img src={data.author.avatar} alt="User image" /> 
      <div>
        <strong>{data.author.name}</strong>
        <small>{data.date}</small>
      </div>
    </PostHeader>
    
    </>     
    );
  }
}

class PostComments extends Component {
  render() {
    const { data } = this.props
    const { comments } = data;

    return (
      
    )
  }
}export default 