import React, { Component } from 'react';

import { Header , PostComment, PostItem } from './styles';

class PostHeader extends Component {
  render() {
    const { author, date } = this.props
   
    return(
    <Header>
        <img src={author.avatar} alt="User image" /> 
      <div>
        <strong>{author.name}</strong>
        <small>{date}</small>
      </div>
    </Header>  
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
    const { author, date, content, comments } = this.props;

    return (
      <PostItem>
        <PostHeader author={author} date={date} />
        <p>{content}</p>
        <hr />
        {comments.map(comment => <PostComments key={comment.id} data={comment} />)}
      </PostItem>
    )
  }
}