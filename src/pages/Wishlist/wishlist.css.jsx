import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Container = styled(Box)``;

export const NoItemMsg = styled(Stack)`
	color: var(--gray-cl);
	height: 80vh;
	align-items: center;
	justify-content: center;
	display: ${props => props.length > 0 && "none"};
`;

export const Wrapper = styled(Stack)`
	margin: 1.25em 0;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1.5em;
	justify-content: center;
`;
export const ProductCont = styled(Box)`
	flex: 1;
	margin-top: 0.625em;
	padding: 1.25em;
	border: 1px solid var(--secondary-cl);
	border-radius: 0.3125em;
	color: var(--secondary-cl);
`;
export const Top = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
	gap: 1.5em;
`;
export const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: contain;
`;
export const InfoCont = styled(Stack)`
	gap: 1.5em;
`;

export const Price = styled(Box)``;
export const Title = styled(Typography)`
	text-transform: capitalize;
	white-space: nowrap;
`;
export const Bottom = styled(Box)`
	margin-top: 1.25em;
	display: flex;
	justify-content: space-between;
`;
export const SButton = styled(Button)`
	width: 130px;
	height: 28px;
	border-radius: 0.3125em;
	font-size: 0.75rem;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	&:hover {
		background-color: var(--secondary-cl);
	}
`;
export const RemoveIcon = styled(Delete)`
	color: red;
	cursor: pointer;
`;
