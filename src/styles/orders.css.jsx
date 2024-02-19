import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Container = styled(Box)`
	min-height: 300px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	gap: 0.625em;
	margin: 1.25em 0;
`;

export const Wrapper = styled(Box)`
	flex: 1;
	padding: 0.625em;
	background-color: var(--primary-cl);
	border-radius: 0.625em;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Top = styled(Box)`
	padding: 0 0.625em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Image = styled.img`
	width: 100px;
	height: 60px;
	object-fit: contain;
`;
export const Title = styled(Typography)`
	align-self: flex-start;
	font-weight: 600;
	text-transform: capitalize;
	white-space: nowrap;
`;
export const Bottom = styled(Box)`
	margin-top: 0.625em;
	padding: 0 1.25em;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Color = styled(Box)`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
`;
export const Quantity = styled(Box)``;
export const Price = styled(Box)``;

export const NoItemMsg = styled(Stack)`
	color: var(--gray-cl);
	height: 80vh;
	align-items: center;
	justify-content: center;
	display: ${props => props.length > 0 && "none"};
`;
