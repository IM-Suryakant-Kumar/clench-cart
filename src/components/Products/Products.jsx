import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Product } from "..";

const Container = styled(Stack)`
	margin: 2em 0;
	flex-direction: row;
	gap: 1.25em;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = ({ products }) => {
	return (
		<Container>
			{products?.map(product => (
				<Product product={product} key={product._id} />
			))}
		</Container>
	);
};

export default Products;
