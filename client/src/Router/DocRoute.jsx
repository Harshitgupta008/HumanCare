import { Route, Routes } from "react-router-dom"
import ErrorPage from "../ErrorPage";
import Contact from "../component/commonComponent/Contact";
import Blog from "../component/commonComponent/Blog";
import Service from "../component/commonComponent/Services";
import Home from "../component/commonComponent/Home";
import LogoutDoc from "../component/doctorComponent/LogoutDoc";
import ProfileDoc from "../component/doctorComponent/Page/ProfileDoc";
import AddBlog from "../component/AddBlog";
import UserBlog from "../component/UserBlog";
const DocRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profiledoc" element={<ProfileDoc />}>
                    <Route path="" element={<LogoutDoc />} />
                    <Route path="logoutdoc" element={<LogoutDoc />} />
                </Route>
                <Route path="/blog/:subpage" element={<UserBlog />} />
                <Route path="/addblog" element={<AddBlog />} />


                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}
export default DocRoute;