import { userRequest } from "../requestMethods";
import { Button } from "../styles/payButton";

const PayButton = ({ products }) => {
	const handleCheckout = async () => {
		try {
			const res = await userRequest.post("/checkout/payment", {
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
			<Button onClick={handleCheckout}>CHECKOUT NOW</Button>
		</>
	);
};

export default PayButton;
