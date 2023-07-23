import { Link } from "react-router-dom";
import { 
    Info, 
    Container, Circle, 
    Image, 
    Icon, 
    FavoriteBorderIcon,
    LocalMallIcon,
    SearchOutlinedIcon
 } from "../styles/product.css";

const Product = ({ item }) => {
	return (
		<Container cat={item.categories}>
			<Circle cat={item.categories} />
			<Image src={item.img} />
			<Info className="info">
				<Icon>
					<LocalMallIcon />
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`} className="link">
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
