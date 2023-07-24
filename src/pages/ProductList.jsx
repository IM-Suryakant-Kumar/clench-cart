import Products from "../components/Products";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import {
	Container,
	Filter,
	FilterContainer,
	FilterText,
	Option,
	Select
} from "../styles/productList.css";
import { getFinalProductsData } from "../api";

export const loader = ({ params, request }) => {
    const category = new URL(request.url).searchParams.get("cat")
    const color = new URL(request.url).searchParams.get("color")
    const size = new URL(request.url).searchParams.get("size")
    const sort = new URL(request.url).searchParams.get("sort")

    return defer({ productsData: getFinalProductsData(category, color, size, sort)})
}

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const loaderData = useLoaderData()

    const renderProductsDataElement = ([products, filtersData]) => {
        const { colors, categories, sizes } = filtersData
        console.log(products)
        
        const color = searchParams.get("color") || "color"
        const size = searchParams.get("size") || "size"
        const cat = searchParams.get("cat") || "category"
        const sort = searchParams.get("sort") || "newest"

        const handleChange = (e) => {
            const { name, value } = e.target

            setSearchParams(prevParams => {
                prevParams.set(name, value)
                return prevParams
            })
        }

        return (
            <Container>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter:</FilterText>
                        <Select 
                            name="color"
                            value={color} 
                            color={color}
                            onChange={handleChange}
                        >
                            <Option disabled value="color" color="no">Color</Option>
                            {colors.map(color => (
                                <Option key={color} color={color} value={color}></Option>
                            ))}
                        </Select>
                        <Select 
                            name="size"
                            value={size} 
                            onChange={handleChange}
                        >
                            <Option disabled value="size">Size</Option>
                            {sizes.map(size => (
                                <Option key={size}>{size}</Option>
                            ))}
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Category:</FilterText>
                        <Select 
                            name="cat"
                            value={cat} 
                            onChange={handleChange}
                        >
                            <Option disabled value="category">Category</Option>
                            {categories.map(category => (
                                <Option key={category}>{category}</Option>
                            ))}
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort:</FilterText>
                        <Select 
                            name="sort" 
                            value={sort} 
                            onChange={handleChange}
                        >
                            <Option value="newest" disabled>Newest</Option>
                            <Option value="asc">Price (low to high)</Option>
                            <Option value="desc">Price (high to low)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                

                <Products products={products} />
            </Container>
        )
    }

	return (
        <Suspense fallback={<h3>Loading...</h3>}>
            <Await resolve={loaderData.productsData}>
                {renderProductsDataElement}
            </Await>
        </Suspense>
	);
};

export default ProductList;
