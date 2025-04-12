export const searchedProducts = (products, search) => {
	products = products.filter(prod =>
		prod.title.toLowerCase().includes(search.toLowerCase())
	);

	return products;
};
