import {usersApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_PROFILE = 'GET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 12},
        {id: 2, message: 'ololo!', likesCount: 8},
        {id: 3, message: '=-=-=-0-0', likesCount: 2},
        {id: 4, message: '-=-=0=-0=-', likesCount: 0},
        {id: 5, message: '=-0-=-0=-0-=', likesCount: 1},
    ],
    newPostText: "Bat's & Korzsh",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost], //push newPost в posts
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case GET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
    }
    return state;
}
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
//thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data)) //диспатч вызова actionCreator
    })
}

export default profileReducer;