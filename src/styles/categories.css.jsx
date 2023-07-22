import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Container = styled(Stack)`
    justify-content: space-between;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
