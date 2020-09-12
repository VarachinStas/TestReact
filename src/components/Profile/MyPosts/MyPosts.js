import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <div className={classes.posts}>
                <Post message='Hello world!' likesCount='1'/>
                <Post message='ololo' likesCount='17'/>
            </div>
        </div>
    )
}

export default MyPosts;