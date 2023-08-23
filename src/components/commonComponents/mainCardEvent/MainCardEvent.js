import React from 'react';
import styles from './mainCardEvent.module.scss'
import {NavLink} from "react-router-dom";
import avatarCardEvent from "../../../assets/defaultAvatarEvent.png";
import {PiWechatLogoFill} from "react-icons/pi";
import {BsClockHistory} from "react-icons/bs";
import {COLORS} from "../../../constants";

const MainCardEvent = ({path, item, role}) => {
    return (
        <div className={styles.container}><NavLink
            to={path} state={{eventId: item.id}} style={{textDecoration: 'none'}}>
            <div className={styles.container__avatarEvent}>
                <img id='myimage' onError={(e)=>e.target.src =avatarCardEvent} src={`https://localhost:7215/api/photos/${item.imgUrl}`}/>
            </div>
            <div className={styles.eventInfoBlock}>
                <h3>{item.nameEvent}</h3>
                <p><PiWechatLogoFill className={styles.eventInfoBlock__icons} style={role === 'Organizer' ? {color: COLORS.organizerGreen1} : {color: COLORS.participantRed1}}></PiWechatLogoFill>
                    формат проведения: {item.formatEvent}
                </p>
                <p><BsClockHistory className={styles.eventInfoBlock__icons} style={role === 'Organizer' ? {color: COLORS.organizerGreen1} : {color: COLORS.participantRed1}}></BsClockHistory>
                    {item.date} {item.startTime ? item.startTime.substring(0, 5) : ''}-{item.endTime ? item.endTime.substring(0, 5) : ''}
                </p>
                <div className={styles.eventInfoBlock__categories}>
                    {item.categories?.map(category => (
                        <div key={category.call}>{category}</div>
                    ))}
                </div>
            </div>
        </NavLink>
        </div>
    );
};

export default MainCardEvent;