import { Route, Routes } from "react-router-dom"
import ErrorPage from "../ErrorPage";
import Contact from "../component/commonComponent/Contact";
import Blog from "../component/commonComponent/Blog";
import Service from "../component/commonComponent/Services";
import Home from "../component/commonComponent/Home";
const CommonRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}
export default CommonRoute;