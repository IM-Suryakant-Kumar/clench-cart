import { useSearchParams } from "react-router-dom";
import {
	Container,
	Filter,
	FilterContainer,
	FilterText,
	Option,
	Select,
	SButton as Button,
	PaginationCont,
	PageCont,
	PageNo,
	NoItemMsg,
} from "./productList.css";
import { Loader, Products } from "../../components";
import { useGetProductsQuery } from "../../features/apis";
import { filteredData } from "../../utils";

const ProductList = () => {
	const { data, isLoading } = useGetProductsQuery();
	const [searchParams, setSearchParams] = useSearchParams();

	const cat = searchParams.get("cat");
	const color = searchParams.get("color");
	const size = searchParams.get("size");
	const sort = searchParams.get("sort");
	const page = Number(searchParams.get("page"));
	const search = searchParams.get("search");

	let products, filtersData, productsLength;
	if (data) {
		const finalFilteredData = filteredData(
			data.products,
			cat,
			color,
			size,
			sort,
			page,
			search
		);

		products = finalFilteredData[0];
		filtersData = finalFilteredData[1];
		productsLength = finalFilteredData[2];
	}

	const pageSize = Number(searchParams.get("page-size")) || 6;
	const pageLength = Math.ceil(productsLength / pageSize);

	let colors, categories, sizes;
	filtersData && ({ colors, categories, sizes } = filtersData);
	// console.log(products)

	const handleChange = e => {
		const { name, value } = e.target;

		setSearchParams(prevParams => {
			prevParams.set(name, value);
			// everytime when handleChange occur set page to 1
			prevParams.set("page", 1);
			return prevParams;
		});
	};

	const handlePage = btn => {
		setSearchParams(prevParams => {
			btn === "prev" && page > 1 && prevParams.set("page", page - 1);
			btn === "next" && page < pageLength && prevParams.set("page", page + 1);

			return prevParams;
		});
	};

	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<FilterContainer>
				<Filter>
					<FilterText>Filter:</FilterText>
					<Select
						name="color"
						value={color || "color"}
						color={color || "color"}
						onChange={handleChange}>
						<Option disabled value="color" color="no">
							Color
						</Option>
						{colors.map(color => (
							<Option key={color} color={color} value={color}></Option>
						))}
					</Select>
					<Select name="size" value={size || "size"} onChange={handleChange}>
						<Option disabled value="size">
							Size
						</Option>
						{sizes.map(size => (
							<Option key={size}>{size}</Option>
						))}
					</Select>
				</Filter>
				<Filter>
					<FilterText>Category:</FilterText>
					<Select name="cat" value={cat || "category"} onChange={handleChange}>
						<Option disabled value="category">
							Category
						</Option>
						{categories.map(category => (
							<Option key={category}>{category}</Option>
						))}
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort:</FilterText>
					<Select name="sort" value={sort || "newest"} onChange={handleChange}>
						<Option value="newest" disabled>
							Newest
						</Option>
						<Option value="asc">Price (low to high)</Option>
						<Option value="desc">Price (high to low)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Button onClick={() => setSearchParams({ page: 1 })}>Clear All</Button>
			<PaginationCont>
				<FilterText>Page: </FilterText>
				<PageCont>
					<Button
						onClick={() => handlePage("prev")}
						className="page-btn"
						disabled={page <= 1}>
						prev
					</Button>
					<PageNo>{page}</PageNo>
					<Button
						onClick={() => handlePage("next")}
						className="page-btn"
						disabled={page >= pageLength}>
						next
					</Button>
				</PageCont>
			</PaginationCont>
			{/* No item msg */}
			<NoItemMsg length={products.length}>No items found</NoItemMsg>
			<Products products={products} />
		</Container>
	);
};

export default ProductList;
