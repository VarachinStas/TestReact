import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='site-wrapper'>
            <Header/>
            <Nav/>
            <div className='site-wrapper-content'>
                {/*<Route path='/profile' component={Profile}/>*/}
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}

                <Route path='/profile' render={() =>
                    <Profile profilePage={props.state.profilePage}
                             dispatch={props.dispatch}
                    />}
                />
                <Route path='/dialogs' render={() =>
                    <Dialogs store={props.store} state={props.state.dialogsPage}/>}/>
            </div>
        </div>
    );
}

export default App;