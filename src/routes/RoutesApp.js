import {Route, Routes} from "react-router-dom";
import HomePageP from "../pages/participantPages/HomePage";
import HomePageOr from "../pages/organizerPages/HomePage";
import ProfileP from "../pages/participantPages/Profile";
import ProfileOr from "../pages/organizerPages/Profile";
import ListNotifications from "../pages/participantPages/ListNotifications";
import ViewingAnEvent from "../pages/commonPages/ViewingAnEvent";
import OwnEvents from "../pages/organizerPages/OwnEvents";
import HomePageApp from "../pages/HomePageApp";
import NotFound from "../pages/NotFound";

function RoutesApp() {
    return (
        <div>
            <Routes>
                <Route path="/participant">
                    <Route path="homePage" element={<HomePageP></HomePageP>}></Route>
                    <Route path="profile" element={<ProfileP></ProfileP>}></Route>
                    <Route path="notifications" element={<ListNotifications></ListNotifications>}></Route>
                    <Route path="viewingAnEvent" element={<ViewingAnEvent></ViewingAnEvent>}></Route>
                </Route>
                <Route path="/organizer">
                    <Route path="homePage" element={<HomePageOr></HomePageOr>}></Route>
                    <Route path="profile" element={<ProfileOr></ProfileOr>}></Route>
                    <Route path="ownEvents" element={<OwnEvents></OwnEvents>}></Route>
                    <Route path="viewingAnEvent" element={<ViewingAnEvent></ViewingAnEvent>}></Route>
                    {/*<Route path="*" element={<NotFound></NotFound>}></Route>*/}
                </Route>
            </Routes>
            <Routes>
                <Route path="/" element={<HomePageApp></HomePageApp>}></Route>
            </Routes>
            {/*<Routes>*/}
            {/*    <Route path="/registration" element={<Registration/>}/>*/}
            {/*    <Route path="/login" element={<Login/>}/>*/}
            {/*</Routes>*/}
            {/*<Routes>*/}
            {/*    <Route path="/user">*/}
            {/*        <Route path="listNotifications" element={<RequireAuth><ListNotifications/></RequireAuth>}/>*/}
            {/*        <Route path="mainPageUser" element={<RequireAuth><Homepage/></RequireAuth>}/>*/}
            {/*        <Route path="questionnairePage" element={<RequireAuth><Questionnaire/></RequireAuth>}/>*/}
            {/*        <Route path="viewingAnEvent" element={<RequireAuth><ViewingAnEvent/></RequireAuth>}/>*/}
            {/*        <Route path="profilePageUser" element={<RequireAuth><Profile/></RequireAuth>}/>*/}
            {/*        <Route path="viewingAnEvent/viewingListOfSpeakers"*/}
            {/*               element={<RequireAuth><ViewingListOfSpeakers/></RequireAuth>}/>*/}
            {/*        <Route path="viewingAnEvent/materialsSpeakers"*/}
            {/*               element={<RequireAuth><MaterialsOfTheSpeakers/></RequireAuth>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            {/*<Routes>*/}
            {/*    <Route path="/moderator">*/}
            {/*        <Route path="mainPageModerator" element={<RequireAuth><HomePageModerator/></RequireAuth>}/>*/}
            {/*        <Route path="organizationProfilePageModerator"*/}
            {/*               element={<RequireAuth><OrganizationProfile/></RequireAuth>}/>*/}
            {/*        <Route path="eventsListModerator"*/}
            {/*               element={<RequireAuth><ModeratorsOwnEvents/></RequireAuth>}></Route>*/}
            {/*        <Route path="eventsListModerator/updateAnEvent"*/}
            {/*               element={<RequireAuth><UpdateAnEvent/></RequireAuth>}></Route>*/}
            {/*        <Route path="eventsListModerator/viewPotentialParticipant"*/}
            {/*               element={<RequireAuth><ViewPotentialParticipantProfile/></RequireAuth>}></Route>*/}

            {/*        <Route path="eventsListModerator/editParticipantsList"*/}
            {/*               element={<DndProvider*/}
            {/*                   backend={HTML5Backend}><RequireAuth><ParticipantsListEdit/></RequireAuth></DndProvider>}></Route>*/}
            {/*        <Route path="mainPageModerator/viewingAnEvent"*/}
            {/*               element={<RequireAuth><ViewingAnEventModerator/></RequireAuth>}></Route>*/}
            {/*        <Route path="mainPageModerator/viewingAnEvent/viewingListOfSpeakers"*/}
            {/*               element={<RequireAuth><ViewingListOfSpeakers/></RequireAuth>}/>*/}
            {/*        <Route path="mainPageModerator/viewingAnEvent/materialsSpeakers"*/}
            {/*               element={<RequireAuth><MaterialsOfTheSpeakers/></RequireAuth>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default RoutesApp;