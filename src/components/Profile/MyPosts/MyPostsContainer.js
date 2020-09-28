import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/progileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    //let state = props.store.getState()

    return (
        <StoreContext>
            {
                (store) => {
                    let state = store.getState()
                    let addPost = () => {
                        store.dispatch(addPostCreator())
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextCreator(text)
                        store.dispatch(action)
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext>
    )
}

export default MyPostsContainer;