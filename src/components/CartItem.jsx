import { useDispatch } from "react-redux"
import { 
    Container, 
    Desc, 
    Image, 
    InfoCont, 
    Title ,
    Color,
    Spec,
    Size,
    Price,
    // AddCont,
    // AddIcon,
    // RemoveIcon,
    // NumOfItems,
    C,
    DeleteIcon
} from "../styles/cartItem.css"
import { removeCart } from "../features/cart/cartSlice"

const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    // console.log(product)
    return (
        <Container>
            <Image src={product.img} />
            <InfoCont>
                <Title variant="h6" component="h1">{product.title}</Title>
                <Desc variant="subtitle1">{product.desc}</Desc>
                <Spec>
                    <Color>Color: <C bg={product.color} /></Color>
                    <Size>Size: {product.size}</Size>
                </Spec>
                <Price>Price: ₹ {product.price}</Price>
                <DeleteIcon onClick={() => dispatch(removeCart(product._id))} />
                {/* <AddCont>
                    <RemoveIcon />
                    <NumOfItems>{product.quantity}</NumOfItems>
                    <AddIcon />
                </AddCont> */}
            </InfoCont>
        </Container>
    )
}

export default CartItem