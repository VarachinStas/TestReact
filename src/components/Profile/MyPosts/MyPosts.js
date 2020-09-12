import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" cols="50" rows="2"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>

            <div className={classes.posts}>
                <Post message='Hello world!' likesCount='1'/>
                <Post message="It's my first post" likesCount='17'/>
            </div>
        </div>
    )
}

export default MyPosts;