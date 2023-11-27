import { useSelector, useDispatch } from "react-redux"
import CartCards from "../CartCards/CartCards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/actions";
import cartImg from './cartImg.png'

const ShoppingCart = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(state => state.shoppingCartItems)
  const signIn = useSelector(state => state.userLogged)
  const total = useSelector(state => state.cartTotal)
  let fixedTotal = Number(total.toFixed(2));

  // console.log('PRODUCTOS DEL CARRITO / VISTA SHOPPING CART', products);

  const disableByEmptyProps = () => {
    let disabledAux = true;
    if (products.length === 0) {
      disabledAux = true;
    } else {
      disabledAux = false;
    }
    return disabledAux;
  }

  const buy = () => {
    if(!signIn){
      // pdte reemplazar el alert por un toast de bootstrap.
      alert('Se requiere iniciar sesión para completar tu compra')
      navigate("/inicioSesion")
    }else if(signIn && products.length > 0){
      axios.post('https://jsonplaceholder.typicode.com/posts', {products,fixedTotal})
      .then((response) => {
        console.log('Compra finalizada:', response.data);
        alert('Compra realizada exitosamente', response.data);
        dispatch(clearCart())
        navigate("/")
        setIsOpen(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div>

        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="carrito-compras-items ">
            <ul className="list-group list-group-flush list-unstyled" id="shoppingCartList">
              {products.length === 0 ? (
                <div>
                  <li><img src={cartImg} alt="Carrito de compras vacío" className="img-fluid "/></li> 
                  <li><p className="fs-4 text-center">Parece que tu carrito esta vacío</p></li> 
                  <div class="d-grid gap-2">
                  <button className={`btn btn-primary`} type="button" onClick={()=>{setIsOpen(false); navigate("/tienda")}}>Ir a la tienda</button>
                  </div>
                  
                </div>
              ):(
                <div>
                  <CartCards/>
                  {!signIn && <p className="text-danger text-center">* Inicia sesión para completar tu compra</p>}
                  <div className="justify-content-end">
                    <p id="shoppingCartTotal">Total: {fixedTotal} USD</p>
                    <button type="button" id="clearShoppingCart" className="btn btn-primary w-100 " disabled={disableByEmptyProps()} onClick={()=>buy()}> Comprar </button>
                  </div>
                </div>

              )}
            </ul>
          </div>

        </div>
        </div>
        
      </div>
    </div>
  )
}

export default ShoppingCart