import React from 'react';
import classes from './ProfileInfo.module.css';
import profileBack from "../../../assets/back.jpg"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={profileBack} width={1000} height={300}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava +description
            </div>
        </div>
    )
}

export default ProfileInfo;