import React, {useContext} from 'react';
import styles from './stopbutton.modules.css';
import {UsersContext} from "../App";

export function StopButton() {
    const usersList = useContext(UsersContext);
  return (
      <button className={styles.button}>{123}</button>
  );
}
