import styled from "@emotion/styled";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export const Container = styled(Stack)`
	flex: 1;
	padding: 1.25em 0;
	border-bottom: 1px solid var(--gray-cl);
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;
export const Image = styled.img`
	height: 40vh;
	object-fit: contain;
	@media (min-width: 768px) {
		flex: 1;
	}
`;
export const InfoCont = styled(Stack)`
	color: var(--secondary-cl);
	max-width: 400px;
	margin: 1.25em 0;
	& > * {
		margin: 0.3125em 0;
	}
	@media (min-width: 768px) {
		flex: 1;
		max-width: 100%;
		width: calc(100vw - (100vw - 100%));
	}
`;
export const Title = styled(Typography)`
	font-size: 1.25rem;
	font-weight: 600;
	text-transform: uppercase;
`;
export const Desc = styled(Typography)``;
export const Spec = styled(Stack)`
	margin-top: 1.25em;
	flex-direction: row;
	justify-content: space-between;
	font-size: 1.25rem;
	text-transform: uppercase;
	@media (min-width: 768px) {
		max-width: 400px;
	}
`;
export const Color = styled(Stack)`
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
export const C = styled(Box)`
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.bg};
	margin-left: 0.3125em;
	cursor: pointer;
`;
export const Size = styled(Box)``;
export const Price = styled(Box)`
	font-size: 1.25rem;
`;
export const AddCont = styled(Stack)`
	flex-direction: row;
	align-items: center;
	gap: 1em;
`;
export const RemoveIcon = styled(Remove)``;
export const NumOfItems = styled(Stack)`
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 30px;
	border: 1px solid;
	border-radius: 0.625em;
	font-weight: 600;
`;
export const AddIcon = styled(Add)``;

export const DeleteIcon = styled(Delete)`
	display: block;
	/* margin-left: auto; */
	color: var(--gray-cl);
	cursor: pointer;
`;
