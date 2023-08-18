import React from 'react';
import styles from "./inputProfile.module.scss"

const InputProfile = (props) => {
    return (
        <input className={styles.inputProfile} onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default InputProfile;