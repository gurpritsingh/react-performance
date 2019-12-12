import React from 'react';
import _map from 'lodash/map';

import { defaultMemoize } from 'reselect';

import Post from './Post';

const getPosts = defaultMemoize((posts) => _map(posts, (post) => <Post key={post.id} post={post}/>));

const PostList = (props) => {
    const { posts } = props;
    return getPosts(posts);
}

export default PostList;