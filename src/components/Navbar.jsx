/* eslint-disable no-unused-expressions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	Wrapper,
	Left,
	Langauge,
	SearchContainer,
	Input,
	Logo,
	Right,
    MenuIcon,
    SearchIcon,
    SearchIconCont,
    PersonIcon,
    IconCont,
    CartIcon,
    SBadge as Badge,
    Title,
    SidebarContainer,
    SList as List,
    SListItem as ListItem,
    CloseIcon,
    MContainer as Container,
    SContainer
} from "../styles/navbar.css";
import Avatar from "./Avatar";
import { toggleSidebar } from "../features/user/userSlice";

const Sidebar = () => {
    const { isSidebarOpen } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <SidebarContainer open={isSidebarOpen}>
            <SContainer maxWidth="xl">
                <List onClick={() => {dispatch(toggleSidebar())}}>
                    <ListItem>
                        <Link to="/" className="link">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/products/new" className="link">Shop Now</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/profile" className="link">Profile</Link>
                    </ListItem>
                    <ListItem>Orders</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            </SContainer>
        </SidebarContainer>
    )
}

const Navbar = ({ user }) => {
	const { quantity } = useSelector((state) => state.cart);
	const { isSidebarOpen } = useSelector((state) => state.user);
    const dispatch = useDispatch()

	return (
		<Container>
            <SContainer maxWidth="xl">
                <Wrapper>
                    <Left>
                        {isSidebarOpen ? <CloseIcon onClick={() => dispatch(toggleSidebar())} /> : <MenuIcon onClick={() => dispatch(toggleSidebar())}  />}
                        <Logo variant="h6" component="h1">
                            <Link to="/" className="link logo">ClenchCart</Link>
                        </Logo>
                    </Left>

                    <Right>
                        <Langauge>EN</Langauge>
                        <SearchContainer>
                            <Input 
                                placeholder="Search" 
                            />
                            <SearchIconCont><SearchIcon /></SearchIconCont>
                        </SearchContainer>
                        <IconCont>
                            {user 
                                ? <Link to="/profile" className="link">
                                    <Avatar 
                                        avatar={user.avatar} 
                                        username={user.username} 
                                        width={24} 
                                        height={24} 
                                        font={0.875} 
                                    /> 
                                </Link>
                                : <Link to="/login" className="link center">
                                    <PersonIcon /> <Title variant="body2">Sign Up/Sign In</Title>
                                </Link>}
                            | <Link to="/cart" className="link">
                                <Badge badgeContent={quantity} color="primary"><CartIcon /></Badge>
                                
                            </Link>
                        </IconCont>
                    </Right>
                </Wrapper>
                <Sidebar />
            </SContainer>
		</Container>
	);
};


export default Navbar;
