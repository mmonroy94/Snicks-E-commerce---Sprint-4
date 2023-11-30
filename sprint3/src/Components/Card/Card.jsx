import style from './Card.module.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addItemCart, cartTotal } from '../../redux/actions'
import { Toast } from 'react-bootstrap';

const Card = ({id,name, type, brand, gender, price,image}) => {
const dispatch = useDispatch()
const [item, setItem] = useState({
    id: id,
    name: name,
    price: price,
    image: image
})

const [showToast, setShowToast] = useState(false); 

const addItem = () => {
      dispatch(addItemCart(item))
      dispatch(cartTotal(item.price))
      setShowToast(true)
  };

    return(
        <div className="container p-1">
            <div className="row">
                <div className="col-md-3">
                    <div className={`card h-100 ${style.cardContainer}`}>
                        <img src={image} className="card-img-top custom-img" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title fs-5">{name}</h5>
                            <p className="card-text mx-2 my-1 text-secondary">{type}</p>
                            <p className="card-text mx-2 my-1 text-secondary">Marca: {brand}</p>
                            <p className="card-text mx-2 my-1 text-secondary">Género: {gender}</p>
                            <p className="card-text mx-2 mt-1 mb-3">USD {price}</p>
                            
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary w-100" onClick={addItem} id="liveToastBtn">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          zIndex: '1000',
          margin: '10px' // Ajusta el valor según sea necesario
        }}
      >

        <Toast.Body>
        Producto agregado al carrito exitosamente! 🎉
                    </Toast.Body>
      </Toast>



        </div>
    )
}

export default Card;