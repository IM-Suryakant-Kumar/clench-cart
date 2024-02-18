export const sortProducts = (products, sort) => {
	sort === "asc"
		? products.sort((a, b) => a.price - b.price)
		: products.sort((a, b) => b.price - a.price);

	return products;
};
