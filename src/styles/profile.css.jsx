import styled from "@emotion/styled"
import { Box, Stack, Typography } from "@mui/material"

export const Container = styled(Box)`
    margin-top: 1.25em;
`

export const AvatarCont = styled(Stack)`
    margin-top: 3em;
    align-items: center;
`

export const Wrapper = styled(Box)`
    max-width: 400px;
    margin: 1em auto;
    text-align: center;
    padding: 1.25em;
`

export const TitleCont = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled(Typography)`
    margin-top: 1.25em;
    &.title-header {
        border-bottom: 2px solid darkgoldenrod;
        padding-bottom: 0.3125em;
    }
`