import React from 'react';
import TopMenu from "../../components/participant/menu/TopMenu";
import ListEvents from "../../components/commonComponents/listEvents/ListEvents";

const HomePage = () => {
    return (
        <section>
            <TopMenu></TopMenu>
            HOMEPAGE participant
            <ListEvents typeList={'commonListEvent'} role={'Participant'}></ListEvents>
        </section>
    );
};

export default HomePage;