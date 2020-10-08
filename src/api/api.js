import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "df750a09-fbb5-4744-850e-0fa31fd74d3b"},
    baseURI: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 7) { // = 1 по умолчанию, если не передано
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    }
}