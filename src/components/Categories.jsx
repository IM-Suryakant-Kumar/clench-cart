import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Container } from "../styles/categories.css";

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Categories;
