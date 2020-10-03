const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
     users: [ // потом после первого прохода приходят из Users.js props.state
    //     {id: 1, photoURL:'batsya.JPG', followed: true, fullName: 'Batsya', status: 'Fire-Fire!!', location: {city: 'Muhosransk', country: 'Rusь'}},
    //     {id: 2, photoURL:'CoolBoy.JPG', followed: true, fullName: 'CoolBoy', status: 'at home', location: {city: 'VRN', country: 'Rusь'}},
    //     {id: 3, photoURL:'muu.JPG', followed: false, fullName: 'Snezhanna', status: 'at work', location: {city: 'Hz', country: 'Ua'}},
    //     {id: 4, photoURL:'korzh.JPG', followed: true, fullName: 'Korzh', status: 'sleepy', location: {city: 'Mordor', country: 'Argus'}},
    //     {id: 5, photoURL:'flash.jpg', followed: false, fullName: 'Flash', status: 'busy', location: {city: 'StarCity', country: 'Pendosia'}},
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
            return {...state, users: [...state.users, ...action.users]} //склеиваем 2 массива, старый, и новый(дополненный)
        default:
            return state
    }
}
export const followCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;