import style from './Footer.module.css'

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className="container-fluid p-0">
                <footer className="py-2 m-0 bg-body-tertiary">
                    <p className="text-center small text-muted">Copyright &copy; Sniks 2023</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;