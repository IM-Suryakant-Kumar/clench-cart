import styled from "@emotion/styled";
import axios from "../axios";
import { Button } from "@mui/material";


const SButton = styled(Button)`
	width: 100%;
	background-color: var(--secondary-cl);
	color: var(--primary-cl);
	font-weight: 600;
	padding: 0.625em;
    border-radius: 0;
`;

const PayButton = ({ products }) => {
	const handleCheckout = async () => {
		try {
			const res = await axios.post("/checkout/payment", {
				products
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
			<SButton onClick={handleCheckout}>CHECKOUT NOW</SButton>
		</>
	);
};

export default PayButton;
