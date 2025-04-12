import { Link } from "react-router-dom";
import {
	Container,
	Image,
	Info,
	Title,
	SButton as Button,
} from "./categoryItem.css";

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title variant="h6" component="h1">
					{item.title}
				</Title>
				<Link to={`/products?cat=${item.cat}&page=1`}>
					<Button>SHOP NOW</Button>
				</Link>
			</Info>
		</Container>
	);
};

export default CategoryItem;
