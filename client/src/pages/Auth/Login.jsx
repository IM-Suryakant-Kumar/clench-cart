import { useGuestLoginMutation, useLoginMutation } from "../../features/apis";
import {
	SButton as Button,
	Container,
	Input,
	Title,
	Wrapper,
} from "./login.css";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
	const state = useLocation().state;
	const [login, { isLoading: isLoginLoading, error: loginError }] =
		useLoginMutation();
	const [guestLogin, { isLoading: isGuestLoading, error: guestLoginError }] =
		useGuestLoginMutation();

	const errorMessage =
		loginError?.data.message || guestLoginError?.data.message;

	const handleSubmit = e => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData?.get("email");
		const password = formData?.get("password");
		login({ email, password });
	};

	return (
		<Container>
			<Wrapper>
				<Title variant="h6" component="h2" className="main">
					SIGN IN
				</Title>
				{state?.message && (
					<Title variant="subtitle2" component="h3" className="message">
						{state?.message}
					</Title>
				)}
				{errorMessage && (
					<Title variant="subtitle2" component="h3" className="message">
						{errorMessage}
					</Title>
				)}

				<form onSubmit={handleSubmit} className="login-form">
					<Input type="email" name="email" placeholder="email" />
					<Input type="password" name="password" placeholder="password" />
					<Button type="submit" disabled={isLoginLoading}>
						{isLoginLoading ? "Loggin In..." : "Log In"}
					</Button>
				</form>
				<Button
					className="guest-btn"
					onClick={guestLogin}
					disabled={isGuestLoading}>
					{isGuestLoading ? "Guest Logging in..." : "Guest Login"}
				</Button>
				<Title variant="body2">
					Don't have an account?
					<Link to="/register" className="register">
						{" "}
						Create Now
					</Link>
				</Title>
			</Wrapper>
		</Container>
	);
};

export default Login;
