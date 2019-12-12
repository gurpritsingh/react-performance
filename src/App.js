import React from 'react';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import Counter from './components/Counter';
import { randomColor } from './utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      posts: [{
        id: new Date().getTime(),
        title: 'What do you want to do before you die ?',
        description: 'Lists of all the big and tiny things thats I want to do in this lifetime',
      }],
    };
  }

  updateCount = () => {
    window.setInterval(() => {
      this.setState({
        count: this.state.count+1
      })
    }, 800);
  };

  componentDidMount() {
    this.updateCount();
 }

  addPost = (newPost) => {
    this.setState({
      posts: [ ...this.state.posts, newPost]
    })
  }
  render() {
    const { posts, count } = this.state;
    return (
      <div className="App">
        <div style={{backgroundColor: randomColor(), width: 50, height: 50, marginLeft: 10 }}></div>
        <PostList posts={posts}/>
        <Counter  count={count}/>
        <h1>POSTS..</h1>
        <AddPost addPost={this.addPost} />
      </div>
    );
  }
}

export default App;
