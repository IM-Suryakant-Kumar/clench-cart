import styled from "@emotion/styled";
import { Logout } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	margin-top: 1.25em;
`;

export const AvatarCont = styled(Stack)`
	margin-top: 3em;
	align-items: center;
	position: relative;
`;

export const UploadCont = styled(Box)`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;

	display: flex;
	align-items: flex-end;
`;

export const Label = styled.label`
	display: inline-block;
	width: 100%;
	background-color: var(--gray-cl);
	color: var(--fashion-cl);
	opacity: 0.6;
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 600;
	padding: 0.625em;
	text-align: center;

	& > input[type="file"] {
		display: none;
	}
`;
export const Input = styled.input``;

export const Wrapper = styled(Box)`
	max-width: 400px;
	margin: 1em auto;
	text-align: center;
	padding: 1.25em;
	color: var(--gray-cl);
	position: relative;
`;

export const TitleCont = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
`;

export const Title = styled(Typography)`
	text-align: left;
	margin-top: 1.25em;
	&.title-header {
		border-bottom: 2px solid var(--secondary-cl);
		padding-bottom: 0.3125em;
	}
`;

// Icon
export const LogoutIcon = styled(Logout)`
	margin-right: 0.625em;
`;

export const SButton = styled(Button)`
	width: 100px;
	height: 30px;
	font-size: 0.625rem;
	text-transform: capitalize;
	position: absolute;
	top: 4.6em;
	right: 1.25em;
	background-color: var(--secondary-cl);
	color: white;
	&:hover {
		background-color: var(--secondary-cl);
	}
`;
