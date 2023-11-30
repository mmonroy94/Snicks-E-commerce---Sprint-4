import sneakersImg from './sneakers.jpg'
import womenImg from './women.jpg'
import menImg from './men.jpg'
import style from './Home.module.css'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <header className="header mt-5">
        <div className="container-xl">
          <div className="row">

            <div className="col-md-5 image-container ms-5">
              <img src={sneakersImg} alt="Zapatillas nike air" className="img-fluid" />
            </div>

            <div className="col-md-6 me-5">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 ">Somos estilo y comodidad.</h1>
                <p className="lead text-secondary">
                  La combinación perfecta entre diseño y funcionalidad, ofrecemos opciones cómodas y adaptables a tus diferentes facetas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>

  )
}

export default Home