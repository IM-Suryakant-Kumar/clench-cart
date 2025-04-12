import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import { Announcement, Footer, Navbar } from "..";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MContainer = styled(Box)``;
const Wrapper = styled(Container)``;

const Layout = () => {
	return (
		<MContainer>
			<Announcement />
			<Navbar />
			<Wrapper maxWidth="xl">
				<Outlet />
			</Wrapper>
			<Footer />
			<ToastContainer
				autoClose={1000}
				pauseOnFocusLoss={false}
				theme="colored"
			/>
		</MContainer>
	);
};

export default Layout;
