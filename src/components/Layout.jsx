import Announcement from "../components/Announcement";
import Navbar from "./Navbar"
import { Await, Outlet, defer, useLoaderData } from "react-router-dom"
import Footer from "./Footer"
import { Box, Container } from "@mui/material"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { getAllCart, getAllwishlist, getLoggedInUser } from "../api";
import styled from "@emotion/styled"
import { Suspense } from "react";
import Loader from "./Loader";

const MContainer = styled(Box)``
const Wrapper = styled(Container)``

export const loader = async () => {
    await getAllCart()
    await getAllwishlist()
    return await defer({user: getLoggedInUser()})
}

const Layout = () => {
    const loaderData = useLoaderData()
    
    return (
        <MContainer>
            <Announcement />
        <Suspense fallback={<Loader />}>
            <Await resolve={loaderData.user}>
                <Navbar />
                <Wrapper maxWidth="xl">
                    <Outlet />
                </Wrapper>
            </Await>
        </Suspense>
            <Footer />
            <ToastContainer autoClose={1000} pauseOnFocusLoss={false} theme="dark" />
        </MContainer>
    )
}

export default Layout