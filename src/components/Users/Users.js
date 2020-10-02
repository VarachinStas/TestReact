import React from "react";
import styles from "./users.module.css"

let Users = (props) => {

    if(props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'batsya.JPG',
                followed: true,
                fullName: 'Batsya',
                status: 'Fire-Fire!!',
                location: {city: 'Muhosransk', country: 'Rusь'}
            },
            {
                id: 2,
                photoURL: 'CoolBoy.JPG',
                followed: true,
                fullName: 'CoolBoy',
                status: 'at home',
                location: {city: 'VRN', country: 'Rusь'}
            },
            {
                id: 3,
                photoURL: 'muu.JPG',
                followed: false,
                fullName: 'Snezhanna',
                status: 'at work',
                location: {city: 'Hz', country: 'Ua'}
            },
            {
                id: 4,
                photoURL: 'korzh.JPG',
                followed: true,
                fullName: 'Korzh',
                status: 'sleepy',
                location: {city: 'Mordor', country: 'Argus'}
            },
            {
                id: 5,
                photoURL: 'flash.jpg',
                followed: false,
                fullName: 'Flash',
                status: 'busy',
                location: {city: 'StarCity', country: 'Pendosia'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users