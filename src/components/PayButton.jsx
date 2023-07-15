import axios from "../axios";
import { Button } from "../styles/payButton";

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
			<Button onClick={handleCheckout}>CHECKOUT NOW</Button>
		</>
	);
};

export default PayButton;
