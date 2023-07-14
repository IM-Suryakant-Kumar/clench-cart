import {
	FavoriteBorderOutlined,
	LocalMallOutlined,
	SearchOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Info, Container, Circle, Image, Icon } from "../styles/product";

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<LocalMallOutlined />
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`}>
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
