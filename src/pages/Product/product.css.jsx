import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export const Container = styled(Box)`
	margin: 1em 0;
	color: var(--secondary-cl);
	background-color: var(--fashion-cl);
	border-radius: 0.625em;
`;

export const Wrapper = styled(Stack)`
	padding: 40px 0;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const ImageContainer = styled(Stack)`
	flex: 1;
	padding: 0.625em 0;
`;

export const Image = styled.img`
	height: 50vh;
	object-fit: contain;
`;

export const InfoContainer = styled(Box)`
	flex: 1;
	padding: 0.625em;
`;

export const Title = styled(Typography)`
	font-size: 1.25rem;
	font-weight: 600;
	text-transform: uppercase;
`;

export const Desc = styled(Typography)`
	margin: 1.25em 0;
`;

export const Price = styled(Typography)`
	font-size: 1rem;
	font-weight: 600;
`;

export const FilterContainer = styled(Stack)`
	max-width: 400px;
	margin: 1em 0;
	flex-direction: row;
	justify-content: space-between;
	gap: 0.625em;
`;

export const Filter = styled(Stack)`
	flex-direction: row;
	align-items: center;
`;

export const FilterTitle = styled(Typography)`
	font-weight: 600;
	margin-right: 0.3125em;
`;

export const FilterColor = styled(Box)`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
	margin-right: 0.3125em;
	cursor: pointer;
`;

export const FilterSize = styled.select`
	padding: 0.3125em 0.6em;
	cursor: pointer;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled(Stack)`
	max-width: 400px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1.875em;
`;

export const QuantityContainer = styled(Stack)`
	flex-direction: row;
	align-items: center;
	font-weight: 700;
`;

export const RemoveIcon = styled(Remove)`
	cursor: pointer;
`;
export const AddIcon = styled(Add)`
	cursor: pointer;
`;

export const Quantity = styled(Stack)`
	width: 40px;
	height: 30px;
	border-radius: 0.625em;
	border: 1px solid;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0 0.3125em;
`;

export const SButton = styled(Button)`
	width: 120px;
	height: 36px;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	font-size: 0.8em;
	font-weight: 600;
	&:hover {
		background-color: var(--secondary-cl);
	}
`;
