import { LocalMallOutlined, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	Container,
	Wrapper,
	Left,
	Langauge,
	SearchContainer,
	Input,
	Center,
	Logo,
	Right,
	MenuItem
} from "../styles/navbar";
import Avatar from "./Avatar";

const Navbar = () => {
	const { quantity } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.user);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Langauge>EN</Langauge>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>
						<Link
							style={{
								textDecoration: "none",
								color: "#3a86ff",
								borderBottom: "4px solid",
								fontSize: "28px"
							}}
							to="/"
						>
							ClenchCart
						</Link>
					</Logo>
				</Center>
				<Right>
                    {user 
                        ? <Link to="/profile" className="link">
                                <Avatar 
                                    avatar={user.avatar}
                                    username={user.username}
                                    width={40}
                                    height={40}
                                    font={1.25}
                                /> 
                            </Link>
                        
                        : (<><MenuItem>
                                <Link 
                                    to="/register" 
                                    className="link"
                                >REGISTER
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link 
                                    to="/login" 
                                    className="link"
                                >SIGN IN</Link>
                            </MenuItem></>)
                        }
					
					<Link to="/cart">
						<MenuItem>
							<Badge
								badgeContent={quantity}
								color="primary"
							>
								<LocalMallOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
