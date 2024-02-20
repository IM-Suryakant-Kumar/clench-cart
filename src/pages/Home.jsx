import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { useGetProductsQuery } from "../features/apis";
import { Loader } from "../components";

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
