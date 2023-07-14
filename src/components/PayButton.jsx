import { userRequest } from "../requestMethods";
import { Button } from "../styles/payButton"

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
