import React, { Component } from 'react';

import { Header } from './styles';

class PostHeader extends Component {
  render() {
    const { data } = this.props

    return(
    <>
    <Header>
        <img src={data.author.avatar} alt="User image" /> 
      <div>
        <strong>{data.author.name}</strong>
        <small>{data.date}</small>
      </div>
    </Header>
    
    </>     
    );
  }
}

class PostComments extends Component {
  render() {
    const { data } = this.props

    return (
      <PostComment>
        <img src={data.author.avatar} alt="User image" />
        <div>
          <strong>{data.author.name}</strong>
          <span>{data.content}</span>
        </div>
      </PostComment>
    )
  }
}

export default class Post extends Component {
  render() {
    return (
      <div>
        <PostHeader data={data} />
        {data.comments.map(comment => <PostComments key={comment.id} data={comment} />)}
      </div>
    )
  }
}