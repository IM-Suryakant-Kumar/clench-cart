import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export const Container = styled(Box)`
    height: 30vh;
    position: relative;
    background-color: var(--primary-cl);
    border-radius: 0.625em;
    overflow: hidden;
    @media (min-width: 768px) {
        height: 60vh;
    }
`
export const Arrow = styled(Stack)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--primary-cl);
    color: var(--secondary-cl);
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc((30vh - 50px) / 2);
    left: ${props => props.dir === "left" && "-1.25em"};
    right: ${props => props.dir === "right" && "-1.25em"};
    cursor: pointer;
    z-index: 2;
    @media (min-width: 768px) {
        top: calc((60vh - 50px) / 2);
    }
`
export const ArrowLeftIcon = styled(ArrowLeft)``
export const ArrowRightIcon = styled(ArrowRight)``
export const Wrapper = styled(Stack)`
    height: 100%;
    flex-direction: row;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideidx * -100}%);
`
export const Slide = styled(Stack)`
    min-width: calc(100vw - (100vw - 100%));
    height: 100%;
    border-radius: 1em;
    flex-direction: row;
    background-color: #${props => props.bg};
    & > * {
        flex: 1;
    }
    @media (max-width: 420px) {
        position: relative;
    }
`
export const ImageContainer = styled(Stack)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 0.625em;
`
export const Image = styled.img`
    height: 80%;
    object-fit: cover;
    object-position: top;
    @media (max-width: 420px) {
        height: 70%;
    }
`
export const InfoContainer = styled(Stack)`
    justify-content: center;
    text-align: justify;
    @media (max-width: 420px) {
        position: absolute;   
        width: 80%;     
        top: 50px;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
`
export const Title = styled(Typography)`
    font-weight: 600;
    @media (max-width: 420px) {
        font-size: 0.75rem;
    }
`
export const Desc = styled(Typography)`
    color: var(--gray-cl);
    margin-top: 0.3125em;
    @media (max-width: 420px) {
        font-size: 0.625rem;
    }
`
export const SButton = styled(Button)`
    height: 35px;
    width: 100px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: 1em;
    background-color: var(--secondary-cl);
    color: var(--primary-cl);
    &:hover {
        background-color: var(--secondary-cl);
    }
    @media (max-width: 420px) {
        width: 80px;
        height: 30px;
        font-size: 0.625rem;
        font-weight: 300;
    }
`