import React from 'react';
import {NavLink} from "react-router-dom";
import {BsBell, BsDoorOpenFill} from "react-icons/bs";
import {PiHouse, PiUserCircleFill} from "react-icons/pi";
import styles from "./topMenu.module.scss"


export default function TopMenu() {
    let activeStyle = {
        background: 'var(--participant-red1)',
        color: 'var(--color-white)',
        borderRadius: "0px 0px 100px 100px",
        height: '90%'
    };
    let noActiveStyle = {
        color: 'var(--participant-red1)',
    };
    // const dispatch = useDispatch()
    // const isAuth = useSelector(state => state.user.isAuth)

    return (
        <section className={styles.blockNav}>
            <ul className={styles.menu}>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle}
                         to="/participant/notifications">
                    <li><BsBell size={30} className={styles.menu__icons}/></li>
                </NavLink>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle}
                         to="/participant/homePage">
                    <li>
                        <PiHouse size={30} className={styles.menu__icons}/>
                    </li>
                </NavLink>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle}
                         to="/participant/profile">
                    <li>
                        <PiUserCircleFill size={30} className={styles.menu__icons}/>
                    </li>
                </NavLink>
                <li>
                    <BsDoorOpenFill size={30} className={styles.menu__icons}></BsDoorOpenFill>
                    {/*{isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }><BsDoorOpenFill size={30}/></div> }*/}
                </li>
            </ul>
        </section>
    );
}