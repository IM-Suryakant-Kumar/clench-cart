import { Link } from "react-router-dom";
import {
	Agreement,
	SButton as Button,
	Container,
	Input,
	Title,
	Wrapper,
} from "./register.css";
import { useRegisterMutation } from "../../features/apis";

const Register = () => {
	const [register, { isLoading, error }] = useRegisterMutation();
	const errorMessage = error?.data.message;

	const handleSubmit = e => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const firstName = formData.get("firstname");
		const lastName = formData.get("lastname");
		const name = firstName + lastName;
		const email = formData.get("email");
		const password = formData.get("password");
		register({ name, email, password });
	};

	return (
		<Container>
			<Wrapper>
				<Title variant="h6" component="h2" className="main">
					CREATE AN ACCOUNT
				</Title>
				{errorMessage && (
					<Title variant="subtitle1" component="h3" className="message">
						{errorMessage}
					</Title>
				)}
				<form onSubmit={handleSubmit} className="form">
					<Input type="text" name="firstname" placeholder="first name" />
					<Input type="text" name="lastname" placeholder="last name" />
					<Input type="email" name="email" placeholder="email" />
					<Input type="password" name="password" placeholder="password" />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>Privacy Policy</b>
					</Agreement>
					<Button type="submit" variant="contained" disabled={isLoading}>
						{isLoading ? "Creating..." : "Create"}
					</Button>
				</form>
				<Title variant="body2" component="h3">
					Already have an account?
					<Link to="/login" className="login">
						{" "}
						Log In
					</Link>
				</Title>
			</Wrapper>
		</Container>
	);
};

export default Register;
