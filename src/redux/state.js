let rerenderAll = () => {
    console.log('state changed')
}

let state = {
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
        ],
        messages: [
            {id: 1, message: 'F@!#'},
            {id: 2, message: 'I will find you!'},
            {id: 3, message: 'mayu mayu!!!'},
            {id: 4, message: 'I want drink!'},
            {id: 5, message: 'Aaaa-a-aa'},
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderAll(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAll(state)
}

export const subscribe = (observer) => {
    rerenderAll(observer)    //паттерн "Слушатель"
}

export default state;