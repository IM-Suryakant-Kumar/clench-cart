import styled from "@emotion/styled";
import { Box, Button, Pagination, Stack } from "@mui/material";

export const Container = styled(Box)``;

export const NoItemMsg = styled(Stack)`
	color: var(--gray-cl);
	height: 40vh;
	align-items: center;
	justify-content: center;
	display: ${props => props.length > 0 && "none"};
`;

export const FilterContainer = styled(Stack)``;

export const Filter = styled(Stack)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 1.25em 0;
	& > select:last-child {
		margin-right: 0 !important;
	}
`;

export const FilterText = styled(Box)`
	margin-right: auto;
	font-size: 1.5rem;
	font-weight: 600;
`;

export const Select = styled.select`
	outline: none;
	border: 1px solid gray;
	padding: 10px;
	margin-right: 0.625em;
	@media (min-width: 768px) {
		margin-right: 2em;
	}
	background-color: ${props => props.color};
	color: ${props => props.color};
`;

export const Option = styled.option`
	background-color: ${props => (props.color === "no" ? "white" : props.color)};
	color: ${props => (props.color === "no" ? "black" : props.color)};
`;

export const SButton = styled(Button)`
	user-select: none;
	display: block;
	margin-left: auto;
	width: 100px;
	height: 35px;
	font-size: 0.875rem;
	font-weight: 600;
	text-transform: capitalize;
	border-radius: 0.3125em;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	&:hover {
		background-color: var(--secondary-cl);
	}
	&.page-btn {
		width: 25px;
		height: 25px;
		font-size: 0.625rem;
	}
`;

export const PaginationCont = styled(Stack)`
	margin: 1.25em 0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const SPagination = styled(Pagination)``;
export const PageCont = styled(Stack)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
export const PageNo = styled(Box)`
	user-select: none;
	font-weight: 600;
	padding: 0.24em 0.875em;
	color: var(--secondary-cl);
	border: 1px solid;
	border-radius: 0.3125em;
	margin: 0 0.625em;
`;
