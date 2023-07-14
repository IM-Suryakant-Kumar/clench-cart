import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Container } from "../styles/categories";

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
