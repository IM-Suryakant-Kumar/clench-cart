export const getProductsByPage = (products, page = 1) => {
	const pageSize = 6;
	let lastProductIdx = page * pageSize - 1;
	let firstProductIdx = lastProductIdx - pageSize + 1;
	products = products.slice(firstProductIdx, lastProductIdx + 1);

	return products;
};
