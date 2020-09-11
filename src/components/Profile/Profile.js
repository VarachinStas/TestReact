import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="back.jpg" width={1000} height={300}/>
            <div className={classes.avatarka}>
                ava +description
            </div>
            <div className={classes.myPosts}>My posts
                <div className={classes.myPosts}>new post</div>
                <div className='posts'>
                    <div className={classes.item}>post1</div>
                    <div className={classes.item}>post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;