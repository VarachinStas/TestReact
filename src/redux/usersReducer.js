const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoURL:'', followed: false, fullName: 'Dimon', status: 'Fire-Fire!!', location: {city: 'Muhosransk', country: 'Rusь'}},
        {id: 2, photoURL:'', followed: true, fullName: 'Vasyan!', status: 'at home', location: {city: 'Novoross', country: 'Rusь'}},
        {id: 3, photoURL:'', followed: false, fullName: 'Snezhanna', status: 'at work', location: {city: 'Hz', country: 'Ua'}},
        {id: 4, photoURL:'', followed: true, fullName: 'Olegus', status: 'sleepy', location: {city: 'Mordor', country: 'Argus'}},
        {id: 5, photoURL:'', followed: true, fullName: 'Flash', status: 'busy', location: {city: 'StarCity', country: 'Pendosia'}},
    ]
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
            return {...state, users: [action.users, ...action.users]} //склеиваем 2 массива, старый, и новые
        default:
            return state;
    }
}
export const followCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;