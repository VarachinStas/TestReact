import React from 'react';
import classes from './Header.module.css';
import mainLogo from "../../assets/batsis.ico"

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={mainLogo}
            />
        </header>
    )
}

export default Header;