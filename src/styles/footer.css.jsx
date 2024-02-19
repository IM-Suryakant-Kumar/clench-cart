import styled from "@emotion/styled";
import {
	GitHub,
	LinkedIn,
	Public,
	Twitter,
	MailOutline,
	Phone,
	Room,
} from "@mui/icons-material";
import {
	Box,
	Container,
	List,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";

export const MContainer = styled(Stack)`
	flex-direction: row;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
`;

export const SContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	& > * {
		flex: 1;
		padding: 1.25em 0;
	}
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const Left = styled(Stack)``;

export const Logo = styled(Typography)`
	text-align: center;
	font-size: 1.4rem;
	font-weight: 600;
	& > .logo {
		border-bottom: 3px solid;
		flex: 1;
	}
	@media (min-width: 768px) {
		text-align: left;
	}
`;

export const SocialContainer = styled(Stack)`
	flex-direction: row;
	margin: 1.25em 0;
	justify-content: space-between;
	@media (min-width: 768px) {
		justify-content: flex-start;
		gap: 1.25em;
		margin-top: 2em;
	}
`;

export const ALink = styled.a``;

export const SocialIcon = styled(Stack)`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: var(--primary-cl);
	color: var(--secondary-cl);
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

// Icon
export const PublicIcon = styled(Public)``;
export const GitHubIcon = styled(GitHub)``;
export const LinkedInIcon = styled(LinkedIn)``;
export const TwitterIcon = styled(Twitter)``;

export const Center = styled(Box)``;

export const Title = styled(Typography)`
	margin-bottom: 1.875em;
	padding-top: 0.625em;
	font-size: 1rem;
	font-weight: 600;
	border-top: 1px solid;
	@media (min-width: 768px) {
		margin-top: 1em;
		border: none;
		padding: 0;
	}
`;

export const SList = styled(List)`
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	&.contact > * {
		width: 100%;
	}
	&.contact > * > * {
		margin-right: 0.625em;
	}
`;

export const SListItem = styled(ListItem)`
	width: 50%;
	margin-bottom: 10px;
`;

export const Right = styled(Box)``;

// Icon
export const RoomIcon = styled(Room)``;
export const PhoneIcon = styled(Phone)``;
export const MailIcon = styled(MailOutline)``;
export const Payment = styled.img`
	width: 50%;
`;
