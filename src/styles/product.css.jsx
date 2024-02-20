import styled from "@emotion/styled";
import {
	FavoriteBorderOutlined,
	LocalMallOutlined,
	SearchOutlined,
} from "@mui/icons-material";
import { Box, Paper, Stack } from "@mui/material";

export const Container = styled(Paper)`
	flex: 1;
	min-width: 289px;
	height: 280px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(
		${props =>
			props.cat.includes("fashion") ? "--fashion-cl" : "--primary-cl"}
	);

	position: relative;
`;

export const Info = styled(Stack)`
	width: 100%;
	height: 100%;
	border-radius: 0.3125em;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	transition: all 1s ease;
	cursor: pointer;
`;

export const Circle = styled(Box)`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: var(
		${props =>
			props.cat.includes("fashion") ? "--fashion-cl" : "--secondary-cl"}
	);
	position: absolute;
`;

export const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

export const Icon = styled(Stack)`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: var(--primary-cl);
	color: var(--secondary-cl);
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
		background-color: var(--primary-cl);
		transform: scale(1.1);
	}
`;

export const LocalMallIcon = styled(LocalMallOutlined)`
	color: ${props => props.isincart === "true" && "red"};
`;
export const SearchOutlinedIcon = styled(SearchOutlined)``;
export const FavoriteBorderIcon = styled(FavoriteBorderOutlined)`
	color: ${props => props.isinwislhist === "true" && "red"};
`;
