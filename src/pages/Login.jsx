import {
	Button,
	Container,
	Form,
	Input,
	Link,
	Title,
	Wrapper
} from "../styles/login";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>LOGIN</Button>
					<Link>DO NOT REMEMBER THE PASSWORD</Link>
					<Link>CREATE NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
