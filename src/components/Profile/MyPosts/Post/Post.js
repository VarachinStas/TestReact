import React from 'react';
import classes from './Post.module.css';
import myPhoto from "../../../../assets/bats.jpg"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={myPhoto}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;