import React, { Suspense } from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { getLatestProducts } from "../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import Loader from "../components/Loader";

export const loader = () => {
     return defer({ products: getLatestProducts() })
}

const Home = () => {
    const loaderData = useLoaderData()

	return (
		<div>
            <Slider />
            <Categories />
            <Suspense fallback={<Loader />}>
                <Await resolve={loaderData.products}>
                    {products => <Products products={products} />}
                </Await>
            </Suspense>
            <Newsletter />
		</div>
	);
};

export default Home;
