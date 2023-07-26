import Announcement from "../components/Announcement";
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { Box, Container } from "@mui/material"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { getLoggedInUser } from "../api";
import styled from "@emotion/styled"

const MContainer = styled(Box)``
const Wrapper = styled(Container)``

export const loader = async () => {
    
    return await getLoggedInUser()
}

const Layout = () => {
    
    return (
        <MContainer>
            <Announcement />
            <Navbar />
            <Wrapper maxWidth="xl">
                <Outlet />
            </Wrapper>
            <Footer />
            <ToastContainer autoClose={1000} pauseOnFocusLoss={false} theme="dark" />
        </MContainer>
    )
}

export default Layout