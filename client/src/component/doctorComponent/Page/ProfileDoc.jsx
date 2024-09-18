import { Outlet } from 'react-router-dom';
import SideNavbarDoc from "../SideNavbarDoc";

const ProfileDoc = () => {
    return (
        <>
            <SideNavbarDoc />
            <Outlet />

        </>
    )
}
export default ProfileDoc;