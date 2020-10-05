import React from 'react';
import classes from './ProfileInfo.module.css';
import profileBack from "../../../assets/back.jpg"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile)
    {
        return <Preloader/>
    }
        return (
            <div>
                <div>
                    <img src={profileBack} width={1000} height={300}/>
                </div>
                <div className={classes.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    ava +description
                </div>
            </div>
        )
}

export default ProfileInfo;