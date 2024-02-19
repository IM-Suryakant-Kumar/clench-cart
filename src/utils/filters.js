export const filterByCategory = (products, category) => {
	return products?.filter(prod => prod.categories.includes(category));
};

export const filterByColor = (products, color) => {
	return products.filter(prod => prod.color.includes(color));
};

export const filterBySize = (products, size) => {
	return products.filter(prod => prod.size.includes(size));
};
