import React, {useContext} from 'react';
import styles from './table.module.css';
import {UsersContext} from "../../App";

interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
}

export function Table() {
    const {usersList,setUsersList} = useContext(UsersContext)
    return (
        <>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {usersList.length > 0 ? usersList.map((user : User) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td><button onClick={()=>{ setUsersList(usersList.filter((filtratedUser: User)=> filtratedUser.id !== user.id)) }}>Удалить</button></td>
                    </tr>
                )) : <tr>
                        <td>Нет данных</td>
                        <td></td>
                        <td></td>
                        <td></td>
                </tr>}
                </tbody>
            </table>
        </>
    );
}
