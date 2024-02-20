import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)`
	width: 100%;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled(Box)`
	max-width: 700px;
	padding: 1.25em;
	background-color: var(--primary-cl);
	& > .form {
		display: flex;
		flex-wrap: wrap;
	}
`;

export const Title = styled(Typography)`
	text-align: center;
	&.main {
		font-family: "Cinzel", serif;
		font-weight: bold;
	}
	&.message {
		font-size: 0.875rem;
		color: red;
	}
	& > .login {
		color: #ada1a1;
		font-size: 0.875rem;
	}
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 1.25em 0.625em 0 0;
	padding: 0.625em;
`;

export const Agreement = styled.span`
	font-size: 0.75rem;
	margin: 1em 0;
	color: var(--gray-cl);
	text-align: justify;
`;

export const SButton = styled(Button)`
	width: 100%;
	height: 30px;
	margin-bottom: 0.625em;
	font-size: 0.875rem;
	text-transform: capitalize;
	letter-spacing: 0.1em;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	&:hover {
		background-color: var(--secondary-cl);
	}
	&:disabled {
		color: var(--gray-cl);
		cursor: not-allowed;
	}
`;
