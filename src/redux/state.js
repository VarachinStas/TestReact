const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likesCount: 12},
                {id: 2, message: 'ololo!', likesCount: 8},
                {id: 3, message: '=-=-=-0-0', likesCount: 2},
                {id: 4, message: '-=-=0=-0=-', likesCount: 0},
                {id: 5, message: '=-0-=-0=-0-=', likesCount: 1},
            ],
            newPostText: "Bat's & Korzsh"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Stas'},
                {id: 2, name: 'Batman'},
                {id: 3, name: 'Korzsh'},
                {id: 4, name: 'Arseniy'},
                {id: 5, name: 'Lera'},
                {id: 6, name: 'Ivachka'},
            ],
            messages: [
                {id: 1, message: 'F@!#'},
                {id: 2, message: 'I will find you!'},
                {id: 3, message: 'mayu mayu!!!'},
                {id: 4, message: 'I want drink!'},
                {id: 5, message: 'Aaaa-a-aa'},
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer    //паттерн "Слушатель"
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default store;
window.store = store;