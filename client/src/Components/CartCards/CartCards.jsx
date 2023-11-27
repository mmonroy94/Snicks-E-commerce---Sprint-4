import CartCard from "../CartCard/CartCard"
import { useSelector } from "react-redux"

const CartCards = () => {
    const cartProducts = useSelector(state => state.shoppingCartItems)
    return(
        <div>
            {cartProducts?.map((product) => {
                return (
                    <div key={product.id}  className='container px-0'>
                    <CartCard
                        key={product.id}
                        id={product.id}
                        name={product.name}                     
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default CartCards