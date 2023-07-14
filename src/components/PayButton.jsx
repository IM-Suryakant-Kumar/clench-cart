import styled from "styled-components";
import { userRequest } from "../requestMethods";

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
	cursor: pointer;
`;

const PayButton = ({ cartItems }) => {

	const handleCheckout = async () => {
		try {
			const res = await userRequest.post("/checkout/payment", {
				cartItems
			});

			if (res.data.url) {
				window.location.href = res.data.url;
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Button onClick={handleCheckout}>CHECKOUT NOW</Button>
		</>
	);
};

export default PayButton;
