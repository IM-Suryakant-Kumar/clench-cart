
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const Container = styled(Box)``;

export const Title = styled(Typography)`
	margin: 1.25em 0;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.5rem;
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
    background-color: ${props => props.color === "no" ? "white" : props.color};
    color: ${props => props.color === "no" ? "black" : props.color};
`;

