import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Stas'},
        {id: 2, name: 'Batman'},
        {id: 3, name: 'Korzsh'},
        {id: 4, name: 'Arseniy'},
        {id: 5, name: 'Lera'},
    ]

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[1].id}/>
                <DialogItem name="Korzsh" id="3"/>
                <DialogItem name="Arseniy" id="4"/>
                <DialogItem name="Lera" id="5"/>
            </div>

            <div className={classes.messages}>
                <Message message="F@!#"/>
                <Message message="I will find you!"/>
                <Message message="mayu mayu!!!"/>
            </div>

        </div>
    )
}

export default Dialogs;