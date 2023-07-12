import { LocalMallOutlined, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Langauge = styled.div`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "20px", marginLeft: "5px" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center", marginRight: "10px" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

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
					<Logo>ClenchCart</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={quantity} color="primary">
							<LocalMallOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
