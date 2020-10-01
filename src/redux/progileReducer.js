const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 12},
        {id: 2, message: 'ololo!', likesCount: 8},
        {id: 3, message: '=-=-=-0-0', likesCount: 2},
        {id: 4, message: '-=-=0=-0=-', likesCount: 0},
        {id: 5, message: '=-0-=-0=-0-=', likesCount: 1},
    ],
    newPostText: "Bat's & Korzsh"
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
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
    }
    return state;
}
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;