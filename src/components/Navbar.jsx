/* eslint-disable no-unused-expressions */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
	SContainer,
	NavLinks,
	HeartIcon,
} from "../styles/navbar.css";
import Avatar from "./Avatar";
import { toggleSidebar } from "../features/reducers";
import { debounce } from "../utils";
import {
	useGetCartsQuery,
	useGetProfileQuery,
	useGetWishlistsQuery,
} from "../features/apis";

const Sidebar = () => {
	const { isSidebarOpen } = useSelector(state => state.sidebar);
	const dispatch = useDispatch();

	return (
		<SidebarContainer open={isSidebarOpen}>
			<SContainer maxWidth="xl">
				<List
					onClick={() => {
						dispatch(toggleSidebar());
					}}>
					<ListItem>
						<Link to="/" className="link">
							Home
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/products?page=1" className="link">
							Shop Now
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/profile" className="link">
							Profile
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/orders" className="link">
							Orders
						</Link>
					</ListItem>
					<ListItem>
						<Link to="/Wishlist" className="link">
							Wishlist
						</Link>
					</ListItem>
				</List>
			</SContainer>
		</SidebarContainer>
	);
};

const Navbar = () => {
	const { data } = useGetProfileQuery();
	const { data: cartData } = useGetCartsQuery();
	const { data: wishlistData } = useGetWishlistsQuery();
	const { isSidebarOpen } = useSelector(state => state.sidebar);

	let user, totalQuantity, products;
	data && (user = data.user);
	cartData && (totalQuantity = cartData.totalQuantity);
	wishlistData && (products = wishlistData.products);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const search = async e => {
		navigate(`/products?page=1&search=${e.target.value}`);
	};

	const optimizeSearchFn = e => {
		debounce(search(e), 500);
	};

	return (
		<Container>
			<SContainer maxWidth="xl">
				<Wrapper>
					<Left>
						{isSidebarOpen ? (
							<CloseIcon onClick={() => dispatch(toggleSidebar())} />
						) : (
							<MenuIcon onClick={() => dispatch(toggleSidebar())} />
						)}
						<Logo variant="h6" component="h1">
							<Link to="/" className="link logo">
								ClenchCart
							</Link>
						</Logo>
						<NavLinks>
							<NavLink to="/" className="link">
								Home
							</NavLink>
							<NavLink to="/products?page=1" className="link">
								Products
							</NavLink>
							<NavLink to="/orders" className="link">
								Orders
							</NavLink>
						</NavLinks>
					</Left>

					<Right>
						<Langauge>EN</Langauge>
						<SearchContainer>
							<Input
								placeholder="Search"
								onChange={e => {
									optimizeSearchFn(e);
								}}
							/>
							<SearchIconCont>
								<SearchIcon />
							</SearchIconCont>
						</SearchContainer>
						<IconCont>
							{user ? (
								<Link to="/profile" className="link">
									<Avatar
										avatar={user?.avatar}
										username={user?.name}
										width={24}
										height={24}
										font={0.875}
									/>
								</Link>
							) : (
								<Link to="/login" className="link center">
									<PersonIcon /> <Title variant="body2">Sign Up/Sign In</Title>
								</Link>
							)}
							|{" "}
							<Link to="/wishlist" className="link hidden">
								<Badge badgeContent={products?.length} color="primary">
									<HeartIcon />
								</Badge>
							</Link>
							<Link to="/cart" className="link">
								<Badge
									badgeContent={totalQuantity && totalQuantity}
									color="primary">
									<CartIcon />
								</Badge>
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
