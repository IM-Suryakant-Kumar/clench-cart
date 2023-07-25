import {
	SButton as Button,
	Container,
	Input,
	Title,
	Wrapper
} from "../styles/login.css";
import { 
    Form, 
    Link, 
    redirect, 
    useActionData, 
    useLoaderData, 
    useNavigation 
} from "react-router-dom";
import { loginUser, getLoggedInUser } from "../api";

export const loader = async ({ request }) => {
    if(await getLoggedInUser()) {
        return redirect("/")
    }
    return new URL(request.url).searchParams.get("message")
}

export const action = async ({ request }) => {
    const formData = await request.formData()
    const username = formData.get("username")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/"
    try {
        await loginUser({ username, password })
        return redirect(pathname)
    } catch (err) {
        return err.msg
    }
}

const Login = () => {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

	return (
		<Container>
			<Wrapper>
				<Title variant="h6" component="h2">SIGN IN</Title>
                {
                    message && <Title variant="subtitle2" component="h3" className="message">{message}</Title>
                }
                {
                    errorMessage && <Title variant="subtitle2" component="h3" className="message">{errorMessage}</Title>
                }

				<Form method="post" className="login-form" replace>
					<Input
						type="text"
						name="username"
						placeholder="username"
					/>
					<Input
						type="password"
						name="password"
						placeholder="password"
					/>
					<Button type="submit" disabled={navigation.state === "submitting"}>
                        {navigation.state === "submitting" ? 
                            "Loggin In..." : "Log In"}
					</Button>
					<Title variant="body2">Don't have an account?
                        <Link to="/register" className="register"> Create Now</Link>
                    </Title>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
