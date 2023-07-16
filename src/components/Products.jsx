// import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "../axios";
import { Container } from "../styles/products.jsx";

const Products = ({ cat, filters, sort }) => {
	// console.log(cat, filters, sort);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat ? `/products?category=${cat}` : "/products"
				);
				setProducts(res.data);
			} catch (err) {
				console.error(err);
			}
		};

		getProducts();
	}, [cat]);

	useEffect(() => {
		cat &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, cat, filters]);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts((prevProd) =>
				[...prevProd].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setFilteredProducts((prevProd) =>
				[...prevProd].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prevProd) =>
				[...prevProd].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{cat
				? filteredProducts.map((item) => (
						<Product
							item={item}
							key={item._id}
						/>
				  ))
				: products.slice(0, 8).map((item) => (
						<Product
							item={item}
							key={item._id}
						/>
				  ))}
		</Container>
	);
};

export default Products;
