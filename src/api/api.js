import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURI: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "b4e3737a-d243-4687-b04c-62cbd116cf62"}
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 7) { // = 1 по умолчанию, если не передано
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/` + userId)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + userId)
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    }
}

export const authApi = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}
