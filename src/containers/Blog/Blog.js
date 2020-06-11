import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import { Switch, Redirect } from 'react-router-dom';

const AsyncComponent = asyncComponent(() => {
    return import('../Blog/NewPost/NewPost')
});

class Blog extends Component {
    render() {
        return (
            <div >
                <header className='Blog'>
                    <nav>
                        <ul><li><Link to='/posts'>Posts</Link></li>
                            <li><Link to='new-post'>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/new-post' component={AsyncComponent} />
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts' />
                </Switch>

            </div>
        );
    }
}

export default Blog;