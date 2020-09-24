const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
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

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
    return state;
}
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer;