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
	padding: 1.5em;
	background-color: var(--primary-cl);
	color: var(--gray-cl);
	& > .login-form {
		max-width: 500px;
		display: flex;
		flex-direction: column;
		@media (min-width: 768px) {
			width: 400px;
		}
	}
`;

export const Title = styled(Typography)`
	text-align: center;
	&.main {
		font-family: "Cinzel", serif;
		font-weight: bold;
	}
	&.message {
		color: red;
		font-weight: 400;
	}
	& > .register {
		font-size: 0.875rem;
		color: #978a8a;
	}
`;

export const Input = styled.input`
	outline: none;
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

export const SButton = styled(Button)`
	width: 100%;
	height: 32px;
	font-size: 0.875rem;
	text-transform: capitalize;
	margin-bottom: 0.625em;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	&:hover {
		background-color: var(--secondary-cl);
	}
	&:disabled {
		color: var(--gray-cl);
		cursor: not-allowed;
	}
	&.guest-btn {
		background-color: #0084ff;
	}
`;
