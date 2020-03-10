import React, { Component } from 'react';

import { Header , PostComment } from './styles';

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
    const { author, date, comments } = this.props;

    return (
      <div>
        {/*{
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/300"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/300"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }*/}
        <PostHeader author={author} date={date} />
        {comments.map(comment => <PostComments key={comment.id} data={comment} />)}
      </div>
    )
  }
}