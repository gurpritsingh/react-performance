import React from 'react';
import { randomColor } from '../utils';

class AddPost extends React.PureComponent {
    state={
        title: '',
        description: '',
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { addPost } = this.props; 
        const { description, title } = this.state;
        addPost({id: new Date().getTime(), title, description});
    }
    render() {
        const { title, description } = this.state;

        return (
            <>
            <div style={{backgroundColor: randomColor(), width: 50, height: 50, marginLeft: 10 }}></div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" required placeholder="Enter title"
                    value={title} onChange={this.handleTitleChange}
                />
                <br />
                <input
                    type="text" required placeholder="Enter title"
                    value={description} onChange={this.handleDescriptionChange}
                />
                <br />
                <button type="submit">Add Post</button>
            </form>
            </>
        )
    }
}

export default AddPost;