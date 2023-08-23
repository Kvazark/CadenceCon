import React, {useState} from 'react';
import styles from './organizerProfile.module.scss'
import ProfileInfoBlock from "../../commonComponents/profileInfo/ProfileInfoBlock";
import {BsDoorOpenFill} from "react-icons/bs";

const OrganizerProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberPhone, setNumberPhone] = useState('');

    const exampleArray =[{
        id: '1',
        labelInput: 'Название организации',
        valueInput: name,
        setValueInput: setName
    },{
        id: '2',
        labelInput: 'Электронная почта',
        valueInput: email,
        setValueInput: setEmail
    }, {
        id: '3',
        labelInput: 'Номер телефона',
        valueInput: numberPhone,
        setValueInput: setNumberPhone
    }]
    return (
        <section className={styles.container}>
            <ProfileInfoBlock listInputs={exampleArray} role={'organizer'}></ProfileInfoBlock>
            {/*{isAuth && */}
                <div className={styles.btnExit}
                     // onClick={() => dispatch(logout()) }
                >
                    выход<BsDoorOpenFill size={30}/></div>
            {/*}*/}
        </section>
    );

};

export default OrganizerProfile;