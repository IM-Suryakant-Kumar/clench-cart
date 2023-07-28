import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const Container = styled(Box)``

export const NoItemMsg = styled(Stack)`
    color: var(--gray-cl);
    height: 80vh;
    align-items: center;
    justify-content: center;
    display: ${props => props.length > 0 && "none"};
`