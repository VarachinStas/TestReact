// файл контейнерной логики
import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage,
    setIsFollowingInProgress, setIsLoading, unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

//контейнерная компонента, которая делает Ajax запросы стору
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        //отдаются пропсы от родителя (UsersContainer)
        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setIsFollowingInProgress={this.props.setIsFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

//функция Возвращает объект, который достаёт из state(сторовского) свойства(users, pageSize...)
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

//функция Возвращает объект, в котором все коллбэки,
//которые диспатчат события в store; store тогда меняется (ну или нет) и
//происходит заново mapStateToProps(что бы достать свежие props из store)
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountCreator(totalCount))
//         },
//         setIsLoading: (isLoading) => {
//             dispatch(setIsLoadingCreator(isLoading))
//         }
//     }
// }
//Вторая контейнерная компонента, которая получается с помощью оборачивания:
//КЛАССОВАЯ компонента UsersContainer получит всё через connect:
//свои пропсы из mapStateToProps, а свои коллБэк диспатчи из mapDispatchToProps

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, setIsLoading,
        setIsFollowingInProgress, getUsers
    })
)(UsersContainer)