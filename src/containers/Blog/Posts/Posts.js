import React, { Component } from 'react';
import './Posts.css';
import Post from '../../../components/Post/Post';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Yai-chan'
                    }
                });
                this.setState({ posts: updatedPosts });
            });
    };

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id)
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                </Link>
            )
        });
        return (
            <div>
                <section className='Posts'>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;