import React, {FormEvent, useContext, useRef} from 'react';
import styles from './form.module.css';
import {UsersContext} from "../../App";
import {generateRandomString} from "../../utils/generateRandomString";

export function Form() {
    const [name, setName] = React.useState(''),
        [surname, setSurname] = React.useState(''),
        [email, setEmail] = React.useState('');
    const {usersList, setUsersList} = useContext(UsersContext);
    const emailInput = useRef<HTMLInputElement>(null);
    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault();
        if (name && surname && validateEmail(email)) {
            setUsersList([...usersList, {name, surname, email, id: generateRandomString()}]);
        }
    }
    return (
        <>
            <form action="" onSubmit={submitHandler} className={styles.form}>
                <input type={"text"} name={"name"} placeholder={'Имя'} value={name} required
                       autoFocus={true}
                       onChange={(ev) => {
                           setName(ev.target.value)
                       }}
                />
                <input type={"text"} name={"surname"} placeholder={'Фамилия'} value={surname} required
                       onChange={(ev) => {
                           setSurname(ev.target.value)
                       }}/>
                <input type={"email"} name={"email"} placeholder={'E-mail'} value={email} required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                       onChange={(ev) => {
                           setEmail(ev.target.value)
                       }}/>
                <button className={styles.submitButton} type={"submit"}>Добавить</button>
            </form>
        </>
    );
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
