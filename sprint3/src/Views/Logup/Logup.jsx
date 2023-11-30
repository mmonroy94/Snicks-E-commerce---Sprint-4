import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import axios from "axios";
import { validateLogup } from '../../formValidation'
import { signIn } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import style from './Logup.module.css'
import Footer from '../../Components/Footer/Footer';

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
    name: 'Ingresa un nombre de mínimo 3 y máximo 20 caracteres',
    email: '',
    password: '',
    passwordConfirmation: '',
    address: '',
    cellphone: ''
  })

  const [touchedFields, setTouchedFields] = useState({});

  const handleFocus = (name) => {
    setTouchedFields({ ...touchedFields, [name]: true });
  };

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
    if (errors.name || errors.email || errors.password || errors.passwordConfirmation || errors.address || errors.cellphone) {
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
        alert('Registro exitoso!');
        dispatch(signIn(true))
        navigate("/")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    return(
      <div className={`container ${style.logupComponent}`}>


        {/* CONTENEDOR TEXTO Y FORMULARIO */}

        <div className="col-md-5 text-container d-flex flex-column">
          <h2 className={`display-4 ${style.logupTitle}`}>Registro</h2>
          <p>Estamos a un paso de compartir nuestra pasión por los zapatos 💛</p>
          <hr/>
          <form onSubmit={handleSubmit} id="logupForm" className="col">
          
          <div className="mb-3" id="nameContainer">
            <label htmlFor="nameInput" className="form-label">Nombre</label>
            <input onChange={handleChange} onFocus={() => handleFocus('name')} type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} name='name' id="nameInput" value={data.name} required/>
          
              <div class="invalid-feedback">
              {errors.name ? (
                <p className='text-danger'>{errors.name}</p>
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <div className="mb-3" id="emailContainer">
            <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
            <input onChange={handleChange} onFocus={() => handleFocus('email')} type="email" className={`form-control ${touchedFields.email && errors.email ? 'is-invalid' : ''}`} name='email' id="emailInput" placeholder="ejemplo@correo.com" value={data.email} required/>
            {touchedFields.email && errors.email &&(
            <div class="invalid-feedback">
              {errors.email ? (
                <p className='text-danger'>{errors.email}</p>
              ) : (
                <p></p>
              )}
            </div>
            )}
          </div>

          <div className="mb-3" id="passwordContainer">
            <label htmlFor="passwordInput" className="form-label">Contraseña</label>
            <input onChange={handleChange} type="password" onFocus={() => handleFocus('password')} className={`form-control ${touchedFields.password && errors.password ? 'is-invalid' : ''}`} name='password' id="passwordInput" value={data.password}/>
            {touchedFields.password && errors.password &&(
            <div className="error-container">
              {errors.password ? (
                <p className='text-danger'>{errors.password}</p>
              ) : (
                <p></p>
              )}
            </div>
            )}
          </div>

          <div className="mb-3" id="passwordConfirmationContainer">
            <label htmlFor="passwordConfirmationInput" className="form-label">Confirmar contraseña</label>
            <input onChange={handleChange} type="password" onFocus={() => handleFocus('passwordConfirmation')} className={`form-control ${touchedFields.passwordConfirmation && errors.passwordConfirmation ? 'is-invalid' : ''}`} name='passwordConfirmation' id="passwordConfirmationInput" value={data.passwordConfirmation}/>
            {touchedFields.passwordConfirmation && errors.passwordConfirmation &&(
            <div className="error-container">
              {errors.passwordConfirmation ? (
                <p className='text-danger'>{errors.passwordConfirmation}</p>
              ) : (
                <p></p>
              )}
            </div>
            )}
          </div>

          <div className="mb-3" id="addressContainer">
            <label htmlFor="addressInput" className="form-label">Dirección</label>
            <input onChange={handleChange} type="text" onFocus={() => handleFocus('address')} className={`form-control ${touchedFields.address && errors.address ? 'is-invalid' : ''}`} name='address' id="addressInput" value={data.address}/>
            {touchedFields.address && errors.address &&(
            <div className="error-container">
              {errors.address ? (
                <p className='text-danger'>{errors.address}</p>
              ) : (
                <p></p>
              )}
            </div>
              )}
          </div>

          <div className="mb-3" id="cellphoneContainer">
            <label htmlFor="cellphoneInput" className="form-label">Celular</label>
            <input onChange={handleChange} type="text" onFocus={() => handleFocus('cellphone')} className={`form-control ${touchedFields.cellphone && errors.cellphone ? 'is-invalid' : ''}`}name='cellphone' id="cellphoneInput" value={data.cellphone} />
            {touchedFields.cellphone && errors.cellphone &&(
            <div className="error-container">
              {errors.cellphone ? (
                <p className='text-danger'>{errors.cellphone}</p>
              ) : (
                <p></p>
              )}
            </div>
             )}
          </div>

          <button type="submit" className='btn btn-primary' id="submitButton" disabled={disableByEmptyProps()}> Registrarme </button>
        </form>

        <div className={`pt-4 ${style.logupLastElement}`}>
            <p>Ya tengo una cuenta, <NavLink to='/inicioSesion'>quiero iniciar sesión.</NavLink></p>
          </div>

      </div>

      <Footer />
      </div>

    )
}

export default Logup