import sneakersImg from './sneakers.jpg'

const Home = () => {
  
  return (
    <div>
      <header className="header mt-5">
        <div className="container-xl">
          <div className="row">

              <div className="col-md-6 image-container px-4">
                <img src={sneakersImg} alt="sneakersImage" className="img-fluid" />
              </div>

            <div className="col-md-6">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 ">Somos estilo y comodidad.</h1>
                <p className="lead text-secondary">
                 Tenemos la combinación perfecta entre diseño y funcionalidad, ofrecemos opciones cómodas y adaptables a tus diferentes facetas.
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