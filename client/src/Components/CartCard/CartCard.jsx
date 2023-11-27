import style from './CartCard.module.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addItemCart, cartTotal, decreaseQuantity, deleteItemCart } from '../../redux/actions'

const CartCard = ({id, name, price, image, quantity}) => {
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        id: id,
        name: name,
        price: price,
        image: image
    })
    
    const addItem = () => {
          dispatch(addItemCart(item))
          dispatch(cartTotal(item.price))
      };

    const decreaseItemQuantity = () => {
        dispatch(decreaseQuantity(item))
        dispatch(cartTotal(-item.price))
    }

    const deleteItem = () => {
        dispatch(deleteItemCart(item))
        dispatch(cartTotal(-(quantity * item.price)))
    }

    return(
        <div className="card mb-2">
        <div className="row g-0">
          <div className="col-md-4 p-1 d-flex align-items-center">
            <img src={image} className="img-fluid rounded" alt={name} />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h5 className={style.cartCardText}>{name}</h5>
              <p className={`pb-2 ${style.cartCardText}`}>Precio unitario: {price} USD</p>
              <div className="d-flex align-items-center">
                <button className={`btn btn-outline-secondary ms-2 d-flex align-items-center justify-content-center ${style.buttonText}`} onClick={decreaseItemQuantity}>−</button>
                <p className="px-2 mb-0 d-flex align-items-center justify-content-center">{quantity}</p>
                <button className={`btn btn-outline-secondary me-2 d-flex align-items-center justify-content-center ${style.buttonText}`} onClick={addItem}>+</button>
                <button className="btn btn-outline-danger ms-2 d-flex align-items-center justify-content-center" onClick={deleteItem}>×</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartCard
