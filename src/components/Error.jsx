import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { useRouteError } from "react-router-dom";

const Container = styled(Stack)`
    height: 80vh;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Error = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <Container>
            <h1>Error: {error.msg}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </Container>
    )
}

export default Error