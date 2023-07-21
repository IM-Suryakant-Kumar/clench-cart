import styled from "@emotion/styled";
import { mobile } from "./responsive";
import { Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled(Box)`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
    & > .login-form {
        display: flex;
	    flex-direction: column;
    }
`;

export const Title = styled(Typography)`
	font-weight: 600;
    text-align: center;
    &.message {
        color: red;
        font-weight: 400;
    }
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

export const SButton = styled(Button)`
	width: 100%;
	padding: 0.3125em;
	background-color: teal;
	color: white;
	margin-bottom: 10px;
    &:hover {
        background-color: teal;
    }
	&:disabled {
		color: green;
		cursor: not-allowed;
	}
`;

export const Link = styled.a`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
    text-align: center;
`;
