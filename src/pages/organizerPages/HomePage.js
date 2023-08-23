import React from 'react';
import SideMenu from "../../components/organizer/menu/SideMenu";
import ListEvents from "../../components/commonComponents/listEvents/ListEvents";

const HomePage = () => {
    return (
        <div>
            <SideMenu></SideMenu>
            <div style={{textAlign: 'center'}}>
                HomePage organizer
            </div>
            <ListEvents typeList={'commonListEvent'} role={'Organizer'}></ListEvents>
        </div>
    );
};

export default HomePage;