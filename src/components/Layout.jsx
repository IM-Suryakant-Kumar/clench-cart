import Announcement from "../components/Announcement";
import Navbar from "./Navbar"
import { Await, Outlet, defer, useLoaderData } from "react-router-dom"
import Footer from "./Footer"
import { Box, Container } from "@mui/material"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { getLoggedInUser } from "../api";
import { Suspense } from "react";
import styled from "@emotion/styled"

const MContainer = styled(Box)``
const Wrapper = styled(Container)``

export const loader = () => {
    return defer({ user: getLoggedInUser()})
}

const Layout = () => {
    const loaderData = useLoaderData()
    
    return (
        <MContainer>
            <Announcement />
            <Suspense fallback={<h3>Loading...</h3>}>
                <Await resolve={loaderData.user}>
                    {user => {
                        console.log(user)
                        return <Navbar user={user} />
                    }}
                </Await>
            </Suspense>
            <Wrapper maxWidth="xl">
                <Outlet />
            </Wrapper>
            <Footer />
            <ToastContainer autoClose={1000} pauseOnFocusLoss={false} theme="dark" />
        </MContainer>
    )
}

export default Layout