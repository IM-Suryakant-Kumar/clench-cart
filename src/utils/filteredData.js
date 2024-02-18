import {
	filterByCategory,
	filterByColor,
	filterBySize,
	getFiltersData,
	getProductsByPage,
	searchedProducts,
	sortProducts,
} from ".";

export const filteredData = (
	products,
	category,
	color,
	size,
	sort,
	page,
	search
) => {
	// Fetching all categories, colors, and size
	const filtersData = getFiltersData(products);
	// search
	search && (products = searchedProducts(products, search));
	// filter
	category && (products = filterByCategory(products, category));
	color && (products = filterByColor(products, color));
	size && (products = filterBySize(products, size));
	// products length
	let length = products.length;
	// Page
	products = getProductsByPage(products, page);

	// sort
	sort && (products = sortProducts(products, sort));

	return [products, filtersData, length];
};
