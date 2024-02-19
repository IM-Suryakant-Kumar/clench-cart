import styled from "@emotion/styled";
import {
	Badge,
	Box,
	Container,
	List,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";
import {
	Close,
	FavoriteBorderOutlined,
	LocalMallOutlined,
	Menu,
	PersonOutline,
	Search,
} from "@mui/icons-material";

export const MContainer = styled(Stack)`
	height: 60px;
	justify-content: center;
	position: relative;
`;

export const SContainer = styled(Container)``;

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
	margin-right: 0.1em;
	width: 50px;
	height: 40px;
	background-color: var(--primary-cl);
	color: var(--secondary-cl);
	padding: 0.3125em;
	border-radius: 0.3125em;
	font-weight: 300;

	@media screen and (min-width: 400px) {
		margin-right: 0.3125em;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;
export const CloseIcon = styled(Close)`
	margin-right: 0.1em;
	width: 50px;
	height: 40px;
	background-color: var(--primary-cl);
	color: var(--secondary-cl);
	padding: 0.3125em;
	border-radius: 0.3125em;
	font-weight: 300;

	@media screen and (min-width: 400px) {
		margin-right: 0.3125em;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Logo = styled(Typography)`
	& > .logo {
		font-family: "Cinzel", serif;
		font-size: 1rem;
		font-weight: 700;
		color: var(--secondary-cl);
		border: 2px solid;
		border-radius: 0.4em;
		padding: 0 0.4em;

		@media screen and (min-width: 400px) {
			font-size: 1.1rem;
		}
	}
`;

export const NavLinks = styled(Box)`
	min-width: 250px;
	margin: 0 auto;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	& > .link {
		font-family: "Cinzel", serif;
		color: var(--secondary-cl);
		font-size: 0%.875rem;
		font-weight: 500;
		&:hover {
			font-weight: 600;
		}
	}
	& > .active {
		font-weight: 600;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

// export const

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
`;

export const IconCont = styled(Stack)`
	flex-direction: row;
	gap: 0.625em;
	align-items: center;
	justify-content: center;
	color: var(--secondary-cl);
	font-weight: 700;
	@media (min-width: 768px) {
		gap: 1.25em;
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
	@media (max-width: 768px) {
		& > .hidden {
			display: none;
		}
	}
`;

export const Title = styled(Typography)`
	display: none;
	@media (min-width: 768px) {
		display: block;
		white-space: nowrap;
		color: var(--gray-cl);
		font-weight: 300;
	}
`;
// Icon
export const SearchIcon = styled(Search)``;
export const PersonIcon = styled(PersonOutline)``;
export const HeartIcon = styled(FavoriteBorderOutlined)``;
export const CartIcon = styled(LocalMallOutlined)``;
export const SBadge = styled(Badge)``;

// Sidebar
export const SidebarContainer = styled(Box)`
	width: 100%;
	transition: all 0.5s ease;
	position: absolute;
	top: 60px;
	left: 0vw;
	left: ${props => (props.open ? 0 : -100)}vw;
	z-index: 5;
	background-color: white;
	/* @media (min-width: 768px) {
        display: none;
    } */
`;

export const SList = styled(List)`
	margin-top: 1em;
`;
export const SListItem = styled(ListItem)`
	text-align: center;
	font-size: 0.875rem;
	padding: 0.875em 0;
	color: var(--secondary-cl);
	border-bottom: 2px solid var(--primary-cl);
	& > * {
		font-family: "Cinzel", serif;
		font-weight: bold;
	}
	@media (min-width: 768px) {
		font-size: 1rem;
		font-weight: 600;
	}
`;
