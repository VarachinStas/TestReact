import React from "react";
import {connect} from "react-redux";
import {
    followCreator,
    setCurrentPageCreator,
    setTotalUsersCountCreator,
    setUsersCreator,
    unfollowCreator
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    //функция Возвращает объект, который достаёт из state(сторовского) свойства(users, pageSize...)
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    //функция Возвращает объект, в котором все коллбэки,
    //которые диспатчат события в store; store тогда меняется (ну или нет) и
    //происходит заново mapStateToProps(что бы достать свежие props из store)
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount))
        }
    }
}
//классовая компонента Users получит всё через connect: свои пропсы из mapStateToProps,
//а свои коллБэк диспатчи из mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Users)