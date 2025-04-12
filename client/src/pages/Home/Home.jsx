import { useGetProductsQuery } from "../../features/apis";
import {
	Categories,
	Loader,
	Newsletter,
	Products,
	Slider,
} from "../../components";

const Home = () => {
	const { data, isLoading } = useGetProductsQuery();

	return (
		<div>
			<Slider />
			<Categories />
			{isLoading && <Loader />}
			{data && (
				<Products products={data?.products.slice(data.products.length - 8)} />
			)}
			<Newsletter />
		</div>
	);
};

export default Home;
