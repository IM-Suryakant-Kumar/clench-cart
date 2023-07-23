import styled from "@emotion/styled";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
    padding: 1.25em 0;
`;

export const Title = styled(Typography)`
    font-size: 1.5rem;
	font-weight: 300;
	text-align: center;
    color: var(--secondary-cl);
    margin-bottom: 0.625em;
    &.summary {
        font-size: 1.1rem;
        color: var(--gray-cl);
    }
`;

export const SButton = styled(Button)`
    width: 100%;
    padding: 0.625em;
    border-radius: 0;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	font-weight: 600;
    &:hover {
        background-color: var(--secondary-cl);
    }
`;

export const ProductsCont = styled(Box)`
    margin: 0.625em 0;
`;

export const Summary = styled(Paper)`
    width: 400px;
    margin-left: auto;
	border-radius: 0.625em;
    padding: 1em 1.25em;
`;

export const Item = styled(Stack)`
	margin: 30px 0;
    flex-direction: row;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
    & > * {
        color: var(--gray-cl);
    }
`;

export const ItemText = styled.span`
`;

export const ItemPrice = styled.span``;