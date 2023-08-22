import React from 'react';
import TopMenu from "../../components/participant/menu/TopMenu";
import ParticipantProfile from "../../components/participant/profile/ParticipantProfile";

const Profile = () => {
    return (
        <section>
            <TopMenu></TopMenu>
            <ParticipantProfile></ParticipantProfile>
            PROFILE USER
        </section>
    );
};

export default Profile;