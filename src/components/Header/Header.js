import React from 'react';
import classes from './Header.module.css';
import mainLogo from "../../assets/batsis.ico"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>

            <img src={mainLogo}/>

            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>

        </header>
    )
}

export default Header;