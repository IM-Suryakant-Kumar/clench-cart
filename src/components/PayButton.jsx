import styled from "@emotion/styled";
import axios from "../features/axios";
import { Button } from "@mui/material";
import { getTokenFromLocalStorage } from "../util";

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
			const res = await axios.post(
				"/api/v1/checkout/payment",
				{
					products,
				},
				{
					headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
				},
			);

			if (res.data.url) {
				window.location.href = res.data.url;
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
