import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { getTokenFromLocalStorage } from "../../utils";

const SButton = styled(Button)`
	width: 100%;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	font-weight: 600;
	padding: 0.4em;
	border-radius: 0.3125em;
	&:hover {
		background-color: var(--secondary-cl);
	}
`;

const PayButton = ({ products }) => {
	const handleCheckout = async () => {
		try {
			const res = await fetch(
				`${process.env.REACT_APP_BASEURL}/checkout/payment`,
				{
					method: "POST",
					body: JSON.stringify({ products }),
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getTokenFromLocalStorage()}`,
					},
				}
			);
			const data = await res.json();

			if (data.url) {
				window.location.href = data.url;
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<SButton onClick={handleCheckout}>CHECKOUT NOW</SButton>
		</>
	);
};

export default PayButton;
