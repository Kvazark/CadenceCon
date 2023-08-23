import React from 'react';
import styles from './listEvents.module.scss'
import {EXAMPLELIST} from "../../../constants";
import {NavLink} from "react-router-dom";
import avatarCardEvent from "../../../assets/defaultAvatarEvent.png"
import {PiWechatLogoFill} from "react-icons/pi";
import {BsClockHistory} from "react-icons/bs";
import MainCardEvent from "../mainCardEvent/MainCardEvent";

const ListEvents = ({typeList, role}) => {
    var cards;
    let path;
    if (role == 'Organizer') path = '/organizer/viewingAnEvent'
    else if (role == 'Participnat') path = '/participant/viewingAnEvent'

    if(typeList==='commonListEvent'){
        cards=<section className={role==='organizer'?styles.blockCardsOrganizer: styles.blockCardsParticipiant}>
            {EXAMPLELIST.map((item) => <>
               <MainCardEvent path={path} item={item} role={role}></MainCardEvent>
            </>)}
        </section>

    }else{

    }
    return (
        <div className={styles.container}>
            {cards}
        </div>
    );
};

export default ListEvents;