import loginImg from '../loginImg.jpg'
import { validateLogin } from '../../formValidation'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { signIn } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import style from './Login.module.css'
import Footer from '../../Components/Footer/Footer'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  console.log('DATO EMAIL', data.email, 'DATO PASSWORD', data.password);

  const [errors, setErrors] = useState({
    email: '',
    password: ''
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
    const newErrors = validateLogin({
      ...data,
      [name]: value,
    });
    setErrors(newErrors);
  };

  const disableByEmptyProps = () => {
    let disabledAux = true;
    if (data.email === "" || data.password === "") {
      disabledAux = true;
    } else {
      disabledAux = false;
    }
    return disabledAux;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = data
    try {
      axios.post('http://localhost:3001/login', { email, password })
      .then((response) => {
        const { token } = response.data;
        console.log('Token recibido:', token);
        dispatch(signIn(true))
        navigate("/")
      })
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`container ${style.loginComponent}`}>
      
      <div className={style.login}>

        {/* CONTENEDOR CENTRAL */}
        <div className='d-flex justify-content-center align-items-center'>

          <div className="col-md d-flex">
            <div className={`text-container d-flex flex-column justify-content-center align-items-center ${style.loginContainer}`}>
              
              <h2 className="display-4">¡Te damos la bienvenida!</h2>
              <p className="lead text-secondary px-2">Iniciar sesión</p>

              <form onSubmit={handleSubmit} id="loginForm" className="container col">


                <div className="mb-3" id="emailContainer">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input onChange={handleChange} onFocus={() => handleFocus('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} type="email" name='email' id="emailInput" placeholder="ejemplo@correo.com" value={data.email} />
                  <div class="invalid-feedback">
                    {errors.email ? (
                      <p className='text-danger'>{errors.email}</p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>

                <div className="mb-3" id="passwordContainer">
                  <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                  <input onChange={handleChange} type='password' className="form-control" name="password" id="passwordInput" value={data.password} />
                </div>

                <div className="d-grid pt-4">
                  <button className="btn btn-primary" type="submit" id="submitButton" disabled={disableByEmptyProps()}>
                    Iniciar sesión
                  </button>
                </div>
              </form>

              <div className="pt-4">
                <p>No tengo una cuenta, <NavLink to='/registro'>quiero registrarme.</NavLink></p>
              </div>

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )

}

export default Login