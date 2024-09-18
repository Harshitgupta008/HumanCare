import SideNavbarClient from "../SideNavbarClient";
import { Outlet } from 'react-router-dom';

const ProfileClient = () => {

    return (
        <>
        
            <SideNavbarClient />
            <Outlet/>
        </>
    )
}
export default ProfileClient;