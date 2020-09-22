import profileReducer from "./progileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {},
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}
export default store;
window.store = store;