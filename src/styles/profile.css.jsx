import styled from "@emotion/styled"
import { Logout } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"

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
    position: relative;
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

// Icon
export const LogoutIcon = styled(Logout)`
    margin-right: 0.625em;
`

export const SButton = styled(Button)`
    text-transform: capitalize;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #0322d3;
    color: white;
    font-weight: 600;
    padding: 0.3125em 0.625em;
    &:hover {
        background-color: #0322d3;
    }
`