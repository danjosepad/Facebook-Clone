import React, { Component } from 'react';

import { FeedContainer } from './styles';

import PostItem from '../Post';

export default class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
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
      },
      {
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
      },
    ]
  };
  

  render() {
    const { posts } = this.state;

    return (
      <FeedContainer>
        <ul>
        {posts.map(post => <PostItem key={post.id} {...post} />)}
        </ul>
      </FeedContainer>
      );
  }
}
