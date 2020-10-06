import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='site-wrapper'>
            <Header/>
            <Nav/>
            <div className='site-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;