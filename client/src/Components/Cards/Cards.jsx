import Card from '../Card/Card'
import { useSelector } from 'react-redux' 

const Cards = () => {
const products = useSelector(state => state.allProducts)

console.log('PRODUCTOS RECIBIDOS EN CARDS', products);
    return(
        <div className='container'>
            <div className='row'>
            {products?.map((product, index) => {
                return (
                    <div key={index} className="col-md-3 mb-4">
                    <Card
                        id={index}
                        name={product.name}
                        type={product.type}
                        brand={product.brand}
                        gender={product.gender}                        
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Cards;