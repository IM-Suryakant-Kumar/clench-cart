import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
	Container,
	Filter,
	FilterContainer,
	FilterText,
	Option,
	Select,
	Title
} from "../styles/productList";

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = (e) => {
		const { name, value } = e.target;
		setFilters({ ...filters, [name]: value });
	};

	// console.log(filters, sort);

	return (
		<Container>
			<Title>{cat}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select
						name="color"
						defaultValue="Color"
						onChange={handleFilters}
					>
						<Option disabled>Color</Option>
						<Option>white</Option>
						<Option>black</Option>
						<Option>red</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
					</Select>
					<Select
						name="size"
						defaultValue="Size"
						onChange={handleFilters}
					>
						<Option disabled>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>loginAction
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest">Newest</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products cat={cat} filters={filters} sort={sort} />
		</Container>
	);
};

export default ProductList;
