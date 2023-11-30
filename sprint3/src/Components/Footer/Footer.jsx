import style from './Footer.module.css'

const Footer = () => {
    return(
        <div>
            <div className="p-0 fixed-bottom">
                <footer className="d-flex justify-content-center align-items-center py-1 m-0 bg-body-tertiary">
                    <p className=" small text-muted">Copyright &copy; Sniks 2023</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;

