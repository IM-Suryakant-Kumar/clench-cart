import Announcement from "../components/Announcement";
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { Box, CssBaseline, GlobalStyles } from "@mui/material"
import styled from "@emotion/styled"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../features/user/userSlice"

const Container = styled(Box)``

const Layout = () => {
    const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	!user && dispatch(getUser());
    
    return (
        <Container>
            <CssBaseline enableColorScheme />
            <GlobalStyles styles={{ h1: { color: "red" } }} />
            <Navbar />
            <Announcement />
            <Outlet />
            <Footer />
            <ToastContainer autoClose={1000} theme="dark" />
        </Container>
    )
}

export default Layout