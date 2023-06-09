import Pie from "./images/pie/footi.jpg"
import Wup from "./images/pie/wup.png"
import Insta from "./images/pie/insta.png"
import Mail from "./images/pie/mail.png"
import Natura from "./images/pie/natura.png"
import Logo from "./images/pie/logotipo.jpg"

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row text-center mt-2">
                <div>
                    <img src={Pie} alt="Banner Caracteristicas de Productos de Natura" width="75%" />
                </div>

            </div>

            <div className="row bg-light align-items-center align-self-center mt-4">
                <div className="col-lg-4 col-md-4 col-sm-12">
                </div>

                <div className="col-lg-1 col-md-1 col-sm-12 text-left">
                    <img src={Logo} alt="Logotipo Empresa Shining Life" width="60px" height="60px" />
                </div>

                <div className="col-lg-4 col-md-3 col-sm-12 text-right align-text-center" >
                    © 2023, Shining Life. Todos los derechos reservados
                </div>

                <div className="col-lg-3 col-md-4 col-sm-12 text-end lign-items-center align-self-center">
                    <div>
                        <a href="https://www.instagram.com/liliana_naturabahia"><img src={Insta} alt="Logo de Instagram"
                            width="50" height="50" /></a>

                        <a href="https://web.whatsapp.com/send?text=&phone=542915370601"><img src={Wup}
                            alt="Logo de WhatsUp" width="50" height="50" /></a>

                        <a href="mailto:lilianamikula@hotmail.com"><img src={Mail} alt="Logo de Correo Electrónico"
                            width="50" height="50" /></a>

                        <a href="http://www.naturacosmeticos.com.ar/consultoria/lilianamikula"><img src={Natura}
                            alt="Logo de la Pagina de Natura" width="50" height="50" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;