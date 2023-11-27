import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import axios from "axios";
import { validateLogup } from '../../formValidation'
import { signIn } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import style from './Logup.module.css'

const Logup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ data, setData ] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    address: '',
    cellphone: ''
  })

  const [ errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    address: '',
    cellphone: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    const newErrors = validateLogup({
      ...data,
      [name]: value,
    });
    setErrors(newErrors);
  };

  const disableByEmptyProps = () => {
    let disabledAux = true;
    if (data.name === "" || data.email === "" || data.password === "" || data.passwordConfirmation === "" || data.address === "" || data.cellphone === "") {
      disabledAux = true;
    } else {
      disabledAux = false;
    }
    return disabledAux;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log('Registro exitoso:', response.data);
        dispatch(signIn(true))
        navigate("/inicio")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    return(
      <div className={`container ${style.logupComponent}`}>
      <div className={style.logup}>

        {/* CONTENEDOR TEXTO Y FORMULARIO */}

        <div className="col-md-5 text-container p-4 d-flex flex-column h-100 mb-5">
          <h2 className="display-4">Registro</h2>
          <form onSubmit={handleSubmit} id="logupForm" className="col">
          
          <div className="mb-1 pt-1" id="nameContainer">
            <label htmlFor="nameInput" className="form-label">Nombre</label>
            <input onChange={handleChange} type="text" className="form-control" name='name' id="nameInput" value={data.name}/>
            <div className="error-container">
              {errors.name ? (
                <p className='text-danger'>{errors.name}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="mb-1 pt-1" id="emailContainer">
            <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
            <input onChange={handleChange} type="email" className="form-control" name='email' id="emailInput" placeholder="ejemplo@correo.com" value={data.email}/>
            <div className="error-container">
              {errors.email ? (
                <p className='text-danger'>{errors.email}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="mb-1 pt-1" id="passwordContainer">
            <label htmlFor="passwordInput" className="form-label">Contraseña</label>
            <input onChange={handleChange} type="password" className="form-control" name='password' id="passwordInput" value={data.password}/>
            <div className="error-container">
              {errors.password ? (
                <p className='text-danger'>{errors.password}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="mb-1 pt-1" id="passwordConfirmationContainer">
            <label htmlFor="passwordConfirmationInput" className="form-label">Confirmar contraseña</label>
            <input onChange={handleChange} type="password" className="form-control" name='passwordConfirmation' id="passwordConfirmationInput" value={data.passwordConfirmation}/>
            <div className="error-container">
              {errors.passwordConfirmation ? (
                <p className='text-danger'>{errors.passwordConfirmation}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="mb-1 pt-1" id="addressContainer">
            <label htmlFor="addressInput" className="form-label">Dirección</label>
            <input onChange={handleChange} type="text" className="form-control" name='address' id="addressInput" value={data.address}/>
            <div className="error-container">
              {errors.address ? (
                <p className='text-danger'>{errors.address}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="mb-1 pt-1" id="cellphoneContainer">
            <label htmlFor="cellphoneInput" className="form-label">Celular</label>
            <input onChange={handleChange} type="text" className="form-control" name='cellphone' id="cellphoneInput" value={data.cellphone} />
            <div className="error-container">
              {errors.cellphone ? (
                <p className='text-danger'>{errors.cellphone}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary" id="submitButton" disabled={disableByEmptyProps()}> Registrarme </button>
        </form>

        <div className="pt-4">
            <p>Ya tengo una cuenta, <NavLink to='/inicioSesion'>quiero iniciar sesión.</NavLink></p>
          </div>

      </div>
      </div>
      </div>

    )
}

export default Logup