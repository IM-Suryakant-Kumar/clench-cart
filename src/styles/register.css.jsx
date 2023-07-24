import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
        rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5
    )),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
    & > .form {
        display: flex;
	    flex-wrap: wrap;
    }
`;

export const Title = styled(Typography)`
	font-weight: 600;
    text-align: center;
    &.message {
        font-size: 0.875rem;
        font-weight: 400;
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
	margin: 20px 10px 0 0;
	padding: 10px;
`;

export const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0;
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
