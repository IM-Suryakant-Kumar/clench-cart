import { Send } from "@mui/icons-material";
import {
	Container,
	Title,
	Desc,
	InputContainer,
	Input,
	SButton as Button,
} from "./newsletter.css";

const Newsletter = () => {
	return (
		<Container>
			<Title component="h1">Newsletter</Title>
			<Desc component="p">Get timely updates for your favorite products.</Desc>
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
