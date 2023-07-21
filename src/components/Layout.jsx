import Announcement from "../components/Announcement";
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { Box, Container } from "@mui/material"
import styled from "@emotion/styled"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../features/user/userSlice"
import Newsletter from "./Newsletter";

const MContainer = styled(Box)``
const SContainer = styled(Container)``

const Layout = () => {
    const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	!user && dispatch(getUser());
    
    return (
        <MContainer>
            <Announcement />
            <SContainer maxWidth="xl">
                <Navbar />
                <Outlet />
                <Newsletter />
                <Footer />
            </SContainer>
            <ToastContainer autoClose={1000} theme="dark" />
        </MContainer>
    )
}

export default Layout