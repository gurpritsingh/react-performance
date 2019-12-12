import React from 'react';
import { randomColor } from '../utils';

class Post extends React.PureComponent {
    render() {
        const { post } = this.props;
        return (
            <>
                <div style={{ backgroundColor: randomColor(), width: 50, height: 50, marginLeft: 10 }}></div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </>
        );
    }
}

export default Post;
