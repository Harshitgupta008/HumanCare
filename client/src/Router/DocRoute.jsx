import { Route, Routes } from "react-router-dom"
import ErrorPage from "../ErrorPage";
import Contact from "../component/commonComponent/Contact";
import Blog from "../component/commonComponent/Blog";
import Service from "../component/commonComponent/Services";
import Home from "../component/commonComponent/Home";
import LogoutDoc from "../component/doctorComponent/LogoutDoc";
import ProfileDoc from "../component/doctorComponent/Page/ProfileDoc";
const DocRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/logoutdoc" element={<LogoutDoc />} />
                <Route path="/profiledoc" element={<ProfileDoc />} />

                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}
export default DocRoute;