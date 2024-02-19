import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

const Container = styled(Box)``;

const Image = styled.img`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;

const DefaultAvatar = styled(Stack)`
	align-items: center;
	justify-content: center;
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	border-radius: 50%;
	font-size: ${props => props.font}rem;
	font-weight: 600;
	background-color: #${props => props.bg};
	color: #f1faee;
	user-select: none;
	cursor: pointer;
`;

const colors = [
	"00f5d4",
	"00bbf9",
	"fee440",
	"f15bb5",
	"9b5de5",
	"ccff33",
	"27187e",
	"70d6ff",
	"c77dff",
	"fe7f2d",
];

const getColorIdx = () => {
	return Math.floor(Math.random() * colors.length);
};

const Avatar = ({ avatar, username, width, height, font }) => {
	return (
		<Container>
			{avatar ? (
				<Image src={avatar} alt="" width={width} height={height} font={font} />
			) : (
				<DefaultAvatar
					bg={colors[getColorIdx()]}
					width={width}
					height={height}
					font={font}>
					{username.substring(0, 1).toUpperCase()}
				</DefaultAvatar>
			)}
		</Container>
	);
};

export default Avatar;
