import { Form, Link, redirect, useActionData } from "react-router-dom";
import {
	Agreement,
	SButton as Button,
	Container,
	Input,
	Title,
	Wrapper
} from "../styles/register.css";
import { getLoggedInUser, register } from "../api";

export const loader = async ({ request }) => {
    if(await getLoggedInUser()) {
        return redirect("/")
    }
    return null
}

export const action = async ({ request }) => {
    const formData = await request.formData()
    const firstName = formData.get("firstname")
    const lastName = formData.get("lastname")
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")
    const confPassword = formData.get("confpassword")
    // const pathname = new URL(request.url).pathname

    try {
        await register(
            { firstName, lastName, username, email, password, confPassword }
        )
        return redirect("/")
    } catch (err) {
        return err.msg
    }
}

const Register = () => {
    const errorMessage = useActionData()

	return (
		<Container>
			<Wrapper>
				<Title variant="h6" component="h2">CREATE AN ACCOUNT</Title>
                {
                    errorMessage && <Title variant="subtitle1" component="h3" className="message">{errorMessage}</Title>
                }
				<Form method="post" className="form" replace>
					<Input 
                        type="text"
                        name="firstname"
                        placeholder="first name" 
                    />
					<Input
                        type="text"
                        name="lastname"
                        placeholder="last name" 
                    />
					<Input 
                        type="text"
                        name="username"
                        placeholder="username" 
                    />
					<Input 
                        type="email"
                        name="email"
                        placeholder="email" 
                    />
					<Input 
                        type="password"
                        name="password"
                        placeholder="password" 
                    />
					<Input 
                        type="confpassword"
                        name="confpassword"
                        placeholder="confirm password" 
                    />
					<Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
					</Agreement>
					<Button type="submit" variant="contained">Create</Button>
				</Form>
                <Title variant="body2" component="h3">Already have an account?
                    <Link to="/login" className="login"> Log In</Link>
                </Title>
			</Wrapper>
		</Container>
	);
};

export default Register;
