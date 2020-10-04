// файл контейнерной логики
import React from "react";
import {connect} from "react-redux";
import {
    followCreator,
    setCurrentPageCreator,
    setTotalUsersCountCreator,
    setUsersCreator,
    unfollowCreator
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

//контейнерная компонента, которая делает Ajax запросы стору
class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        //отдаются пропсы от родителя (UsersContainer)
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

//функция Возвращает объект, который достаёт из state(сторовского) свойства(users, pageSize...)
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

//функция Возвращает объект, в котором все коллбэки,
//которые диспатчат события в store; store тогда меняется (ну или нет) и
//происходит заново mapStateToProps(что бы достать свежие props из store)
let mapDispatchToProps = (dispatch) => {
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

//Вторая контейнерная компонента, которая получается с помощью оборачивания:
//КЛАССОВАЯ компонента UsersContainer получит всё через connect:
//свои пропсы из mapStateToProps, а свои коллБэк диспатчи из mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)