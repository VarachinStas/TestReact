import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})
export const setIsFollowingInProgress = (isLoading, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading, userId})
//thunk
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsLoading(false))
            dispatch(setUsers(data.items))
            dispatch(setCurrentPage(currentPage))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(true, userID))
        usersApi.unfollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(setIsFollowingInProgress(false, userID))
        })
    }
}
export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(true, userID))
        usersApi.follow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(setIsFollowingInProgress(false, userID))
        })
    }
}

export default usersReducer;