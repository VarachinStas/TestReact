import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="back.jpg" width={1000} height={300}/>
            <div>
                ava +description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;