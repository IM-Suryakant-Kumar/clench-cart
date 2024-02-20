import {
	MContainer as Container,
	Left,
	Logo,
	SocialContainer,
	SocialIcon,
	Center,
	Title,
	SList as List,
	SListItem as ListItem,
	Right,
	Payment,
	SContainer,
	GitHubIcon,
	LinkedInIcon,
	TwitterIcon,
	PublicIcon,
	RoomIcon,
	PhoneIcon,
	MailIcon,
	ALink,
} from "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Container>
			<SContainer maxWidth="xl">
				<Left>
					<Logo variant="h6" component="h1">
						<Link to="/" className="link logo">
							ClenchCart
						</Link>
					</Logo>
					<SocialContainer>
						<SocialIcon>
							<ALink
								href="https://suryakant-kumar.netlify.app/"
								className="link"
								target="_blank">
								<PublicIcon />
							</ALink>
						</SocialIcon>
						<SocialIcon>
							<ALink
								href="https://github.com/IM-Suryakant-Kumar"
								className="link"
								target="_blank">
								<GitHubIcon />
							</ALink>
						</SocialIcon>
						<SocialIcon>
							<ALink
								href="https://www.linkedin.com/in/suryakant-kumar/"
								className="link"
								target="_blank">
								<LinkedInIcon />
							</ALink>
						</SocialIcon>
						<SocialIcon>
							<ALink
								href="https://twitter.com/Suryakant_91"
								className="link"
								target="_blank">
								<TwitterIcon />
							</ALink>
						</SocialIcon>
					</SocialContainer>
				</Left>
				<Center>
					<Title variant="body2" component="h3">
						Useful Links
					</Title>
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Cart</ListItem>
						<ListItem>Man Fashion</ListItem>
						<ListItem>Woman Fashion</ListItem>
						<ListItem>Accessories</ListItem>
						<ListItem>My Account</ListItem>
						<ListItem>Order Tracking</ListItem>
						<ListItem>Wishlist</ListItem>
						<ListItem>Wishlist</ListItem>
						<ListItem>Terms</ListItem>
					</List>
				</Center>
				<Right>
					<Title variant="h6" component="h3">
						Contact
					</Title>
					<List className="contact">
						<ListItem>
							<RoomIcon /> 622 Dixie Path , South Tobinchester 98336
						</ListItem>
						<ListItem>
							<PhoneIcon /> + 234 56 78
						</ListItem>
						<ListItem>
							<MailIcon /> contact@clenchcart.dev
						</ListItem>
						<ListItem>
							<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
						</ListItem>
					</List>
				</Right>
			</SContainer>
		</Container>
	);
};

export default Footer;
