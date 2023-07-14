import { Send } from "@mui/icons-material";
import {
	Container,
	Title,
	Desc,
	InputContainer,
	Input,
	Button
} from "../styles/newsletter";

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates for your favorite products.</Desc>
			<InputContainer>
				<Input type="email" placeholder="Your email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
