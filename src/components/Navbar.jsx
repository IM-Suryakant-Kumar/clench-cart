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

const Navbar = () => {
	const { quantity } = useSelector((state) => state.cart);

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
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
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
