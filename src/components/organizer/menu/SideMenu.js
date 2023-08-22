import React from 'react';
import styles from './sideMenu.module.scss'
import {NavLink} from "react-router-dom";
import {PiHouse} from "react-icons/pi";
import {BsBuildingGear, BsCardList} from "react-icons/bs";

const SideMenu = () => {
    let activeStyle = {
        background: "#6A888C",
        color: "var(--color-white)",
        borderRadius: "0px 5px 5px 0px",
        textDecoration: 'none',
        width: '100%'
    };
    let noActiveStyle = {
        color: "var(--organizer-green2)",
        textDecoration: 'none',
        width: '100%'
    };
    return (
        <section className={styles.blockNav}>
            <ul>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle} to="/organizer/homePage">
                    <li>
                        <div className={styles.blockNav__blockLi}><PiHouse size={30}/>Главная</div>
                    </li>
                </NavLink>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle} to="/organizer/ownEvents">
                    <li>
                        <div className={styles.blockNav__blockLi}><BsCardList size={30}/>События</div>
                    </li>
                </NavLink>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle} to="/organizer/profile">
                    <li>
                        <div className={styles.blockNav__blockLi}><BsBuildingGear size={30}/>Организация</div>
                    </li>
                </NavLink>
            </ul>
        </section>
    );
};

export default SideMenu;