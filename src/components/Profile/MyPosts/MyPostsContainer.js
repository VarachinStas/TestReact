import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/progileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

// const MyPostsContainer = (props) => {
//     //let state = props.store.getState()
//
//     return (
//         <StoreContext>
//             {
//                 (store) => {
//                     let state = store.getState()
//                     let addPost = () => {
//                         store.dispatch(addPostCreator())
//                     }
//
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextCreator(text)
//                         store.dispatch(action)
//                     }
//
//                     return <MyPosts updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     posts={state.profilePage.posts}
//                                     newPostText={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext>
//     )
// }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;