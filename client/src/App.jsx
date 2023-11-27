import NavBar from './Components/NavBar/NavBar';
import Logup from './Views/Logup/Logup';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login'
import Footer from './Components/Footer/Footer'
import Store from './Views/Store/Store';
import AdminHome from './Views/Admin/AdminHome/AdminHome';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { getAllProducts } from './redux/actions';

import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])

  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path='/' element={ <Home/> } />     
        <Route path='/inicioSesion' element={ <Login/> } />
        <Route path='/registro' element={ <Logup/> } />
        <Route path='/tienda' element={ <Store/> } />
        <Route path='/admin' element={ <AdminHome/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
