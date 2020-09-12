import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="back.jpg" width={1000} height={300}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava +description
            </div>
        </div>
    )
}

export default ProfileInfo;