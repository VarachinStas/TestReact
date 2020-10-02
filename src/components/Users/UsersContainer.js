import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)