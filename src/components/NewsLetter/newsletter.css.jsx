import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Container = styled(Stack)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		height: 60vh;
		align-items: center;
		justify-content: center;
	}
`;

export const Title = styled(Typography)`
	color: var(--gray-cl);
	font-size: 4rem;
	margin-bottom: 20px;
`;

export const Desc = styled(Typography)`
	color: var(--gray-cl);
	font-size: 1.5rem;
	font-weight: 300;
	margin-bottom: 20px;
`;

export const InputContainer = styled(Box)`
	width: 50%;
	height: 40px;
	background-color: var(--primary-cl);
	display: flex;
	justify-content: space-between;
	border: 1px solid var(--gray-cl);
`;

export const Input = styled.input`
	border: none;
	outline: none;
	flex: 8;
	padding-left: 20px;
`;

export const SButton = styled(Button)`
	flex: 1;
	border: none;
	border-radius: 0;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	&:hover {
		background-color: var(--secondary-cl);
	}
`;
