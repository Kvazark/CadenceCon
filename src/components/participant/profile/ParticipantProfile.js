import React, {useState} from 'react';
import UserAvatar from "./UserAvatar";
import styles from './participantProfile.module.scss'
import ProfileInfoBlock from "../../commonComponents/profileInfo/ProfileInfoBlock";

const ParticipantProfile = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [position, setPosition] = useState('');

    const exampleArray =[{
        id: '1',
        labelInput: 'Имя',
        valueInput: name,
        setValueInput: setName
    },{
        id: '2',
        labelInput: 'Фамилия',
        valueInput: surname,
        setValueInput: setSurname
    },{
        id: '3',
        labelInput: 'Отчество',
        valueInput: patronymic,
        setValueInput: setPatronymic
    },{
        id: '4',
        labelInput: 'Номер телефона',
        valueInput: numberPhone,
        setValueInput: setNumberPhone
    },{
        id: '5',
        labelInput: 'Должность',
        valueInput: position,
        setValueInput: setPosition
    }]
    return (
        <section className={styles.container}>
            <UserAvatar idUser={1}></UserAvatar>
            <ProfileInfoBlock listInputs={exampleArray}></ProfileInfoBlock>

            {/*<p>{name}</p>*/}
            {/*<p>{surname}</p>*/}
        </section>
    );
};

export default ParticipantProfile;