import Cards from '../../Components/Cards/Cards'
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { getAllProducts } from '../../redux/actions';

const Store = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getAllProducts())
    },[dispatch])

    return(
    <div>
        <div className="container pt-5 mt-5">              
            <div className="row">
            <div className="col text-center">
                <h5></h5>
            </div>
            <Cards/>
            </div>
        </div>

        <div className="container p-3" >
            <div className="row" id="storeProducts"></div>
        </div>
    </div>
    )
}

export default Store