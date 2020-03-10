import React, { Component } from 'react';

import { FeedContainer } from './styles';

import PostItem from '../Post';
import posts from '../../services/fakePosts';

export default class PostList extends Component {
  
  state = {
    posts: posts 
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
