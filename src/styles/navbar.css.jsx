import styled from "@emotion/styled";
import { Badge, Box, List, ListItem, Stack, Typography } from "@mui/material";
import { Close, LocalMallOutlined, Menu, PersonOutline, Search } from "@mui/icons-material";

export const Container = styled(Stack)`
	height: 60px;
    justify-content: center;
    position: relative;
`;

export const Wrapper = styled(Stack)`
    flex-direction: row;
	justify-content: space-between;
`;

export const Left = styled(Stack)`
	flex: 1;
    flex-direction: row;
	align-items: center;
`;

export const MenuIcon = styled(Menu)`
    margin-right: 0.3125em;
    width: 50px;
    height: 40px;
    background-color: var(--primary-cl);
    color: var(--secondary-cl);
    padding: 0.3125em;
    border-radius: 0.3125em;
    font-weight: 300;
    /* @media (min-width: 768px) {
        display: none;
    } */
`
export const CloseIcon = styled(Close)`
    margin-right: 0.3125em;
    width: 50px;
    height: 40px;
    background-color: var(--primary-cl);
    color: var(--secondary-cl);
    padding: 0.3125em;
    border-radius: 0.3125em;
    font-weight: 300;
    /* @media (min-width: 768px) {
        display: none;
    } */
`

export const Logo = styled(Typography)`
    font-size: 1.6rem;
    font-weight: 600;
    & > .logo {
        color: var(--secondary-cl);
        border-bottom: 3px solid;
    }
`;

export const Right = styled(Stack)`
    flex: 2;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Langauge = styled(Box)`
    display: none;
    @media (min-width: 768px) {
        margin-right: 1.25em;
        font-size: 14px;
        cursor: pointer;
        color: var(--secondary-cl);
        display: block;
    }
`;

export const SearchContainer = styled(Stack)`
    display: none;
    @media (min-width: 768px) {
        margin-right: 1.25em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        width: 90%;
        max-width: 500px;
        background-color: var(--primary-cl);
        border-radius: 0.3125em;
        padding-left: 1.25em;
    }
`;

export const Input = styled.input`
    width: 75%;
    background-color: var(--primary-cl);
    border: none;
    outline: none;
`;

export const SearchIconCont = styled(Stack)`
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    background-color: var(--primary-cl);
    color: var(--secondary-cl);
    &:hover {
        background-color: var(--secondary-cl);
        color: var(--primary-cl);
    }
`

export const IconCont = styled(Stack)`
    flex-direction: row;
    gap: 0.625em;
    align-items: center;
    justify-content: center;
    color: var(--secondary-cl);
    font-weight: 700;
    @media (min-width: 768px) {
        gap: 1.5em;
    }
    & > * {
        height: 24px;
        cursor: pointer;
    }
    & > .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Title = styled(Typography)`
    display: none;
    @media (min-width: 768px) {
        display: block;
        white-space: nowrap;
        color: var(--gray-cl);
        font-weight: 300;
    }
`
// Icon
export const SearchIcon = styled(Search)``
export const PersonIcon = styled(PersonOutline)``
export const CartIcon = styled(LocalMallOutlined)``
export const SBadge = styled(Badge)``

// Sidebar
export const SidebarContainer = styled(Box)`
    width: 100%;
    transition: all 0.5s ease;
    position: absolute;
    top: 60px;
    left: ${props => props.open ? "0" : "-100"}vw;
    z-index: 5;
    background-color: white;
    /* @media (min-width: 768px) {
        display: none;
    } */
`

export const SList = styled(List)`
    margin-top: 1em;
`
export const SListItem = styled(ListItem)`
    text-align: center;
    color: var(--secondary-cl);
    padding: 1em 0;
    border-bottom: 2px solid var(--primary-cl);
    font-weight: 600;
`