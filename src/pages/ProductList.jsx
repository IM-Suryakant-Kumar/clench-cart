import Products from "../components/Products";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import {
	Container, Filter, FilterContainer, 
    FilterText, Option, Select, SButton as Button, 
    PaginationCont, PageCont, PageNo, NoItemMsg
} from "../styles/productList.css";
import { getFinalProductsData } from "../api";
import Loader from "../components/Loader";

export const loader = ({ params, request }) => {
    const category = new URL(request.url).searchParams.get("cat")
    const color = new URL(request.url).searchParams.get("color")
    const size = new URL(request.url).searchParams.get("size")
    const sort = new URL(request.url).searchParams.get("sort")
    const page = new URL(request.url).searchParams.get("page")
    const search = new URL(request.url).searchParams.get("search")

    return defer({ productsData: getFinalProductsData(category, color, size, sort, page, search)})
}

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const loaderData = useLoaderData()

    const renderProductsDataElement = ([products, filtersData, productsLength]) => {
        const { colors, categories, sizes } = filtersData
        // console.log(products)
        
        // defaul value
        const color = searchParams.get("color") || "color"
        const size = searchParams.get("size") || "size"
        const cat = searchParams.get("cat") || "category"
        const sort = searchParams.get("sort") || "newest"
        const page = Number(searchParams.get("page")) || 1
        const pageSize = Number(searchParams.get("page-size")) || 6
        const pageLength = Math.ceil(productsLength / pageSize)

        const handleChange = (e) => {
            const { name, value } = e.target

            setSearchParams(prevParams => {
                prevParams.set(name, value)
                // everytime when handleChange occur set page to 1 
                prevParams.set("page", 1)
                return prevParams
            })
        }

        const handlePage = (btn) => {

            setSearchParams(prevParams => {
                btn === "prev" && page > 1 && prevParams.set("page", page - 1)
                btn === "next" && page < pageLength && prevParams.set("page", page + 1)
                
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
                <Button onClick={() => setSearchParams({"page": 1})}>Clear All</Button>
                <PaginationCont>
                    <FilterText>Page: </FilterText>
                    <PageCont>
                        <Button 
                            onClick={() => handlePage("prev")} 
                            className="page-btn"
                            disabled={page <= 1}
                        >prev</Button>
                        <PageNo>{page}</PageNo>
                        <Button 
                            onClick={() => handlePage("next")} 
                            className="page-btn"
                            disabled={page >= pageLength }
                        >next</Button>
                    </PageCont>
                </PaginationCont>
                {/* No item msg */}
                <NoItemMsg length={products.length}>No items found</NoItemMsg>
                <Products products={products} />
            </Container>
        )
    }

	return (
        <Suspense fallback={<Loader />}>
            <Await resolve={loaderData.productsData}>
                {renderProductsDataElement}
            </Await>
        </Suspense>
	);
};

export default ProductList;
