import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(Stack)`
	height: 80vh;
	align-items: center;
	justify-content: center;
	text-align: center;
	& > .link-button {
		margin-top: 1em;
		background-color: var(--secondary-cl);
		color: var(--primary-cl);
		font-weight: 600;
		padding: 0.625em 1.25em;
		border-radius: 0.3125em;
	}
`;

const Title = styled(Typography)`
	color: var(--gray-cl);
`;

const NotFound = () => (
	<Container>
		<Title variant="h5" component="h1">
			Sorry, the page you were looking for was not found.
		</Title>
		<Link to="/" className="link link-button">
			Return to Home
		</Link>
	</Container>
);

export default NotFound;
