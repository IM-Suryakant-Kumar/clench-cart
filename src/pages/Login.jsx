import { useState } from "react";
import {
	Button,
	Container,
	Form,
	Input,
	Link,
	Title,
	Wrapper
} from "../styles/login";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const Login = () => {
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState({ username: "", password: "" });
	const { isLoading } = useSelector((state) => state.user);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(loginData));
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="username"
						placeholder="username"
						value={loginData.username}
						onChange={handleChange}
					/>
					<Input
						type="password"
						name="password"
						placeholder="password"
						value={loginData.password}
						onChange={handleChange}
					/>
					<Button type="submit" disabled={isLoading}>
						LOGIN
					</Button>
					<Link>DO NOT REMEMBER THE PASSWORD</Link>
					<Link>CREATE NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
