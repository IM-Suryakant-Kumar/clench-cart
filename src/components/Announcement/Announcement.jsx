import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Container = styled(Box)`
	height: 30px;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
`;

const Announcement = () => {
	return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
