import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	flex: 1;
	margin: 3px;
	position: relative;
`;
export const Image = styled.img`
	border-radius: 0.625em;
	width: 100%;
	height: 20vh;
	object-fit: cover;
	@media (min-width: 768px) {
		height: 70vh;
	}
`;
export const Info = styled(Stack)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const Title = styled(Typography)`
	color: var(--primary-cl);
	margin-bottom: 0.3125em;
	font-size: 1rem;
	font-weight: 600;
`;

export const SButton = styled(Button)`
	width: 120px;
	height: 35px;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	&:hover {
		background-color: var(--secondary-cl);
	}
`;
