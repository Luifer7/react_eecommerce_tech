import { Link } from "react-router-dom";

const Footer = () => {
    return ( 

      <div className="header-home">
        <div className="footer-container container-lg grid">

          <div className="footer-header">
          <Link to={'/'} className='text-decoration-none' >
            <h3 className='text-white fw-bold fuente-titulo text-center'>Eecommerce</h3>
        </Link>
        
            <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>

            <div className="footer-redes">
              <a href="#" className="footer-redes_link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-redes_link">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="footer-redes_link">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer-redes_link">
                <i className="bi bi-linkedin"></i>
              </a>              
            </div>
          </div> {/* Fin footer-header */}

          <div className="footer-contacto">
            <h2> Información de la <span>Tienda</span></h2>

            <div className="footer-contacto-card">
              <div className="footer-contacto-icono">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="footer-contacto-informacion">
                <h4>Número de teléfono</h4>
                <p className="no-margin">+57 321 5421 2135</p>
              </div>
            </div> {/* fin footer-contacto-card */}

            <div className="footer-contacto-card">
              <div className="footer-contacto-icono">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="footer-contacto-informacion">
                <h4>Direccion de correo Electronico</h4>
                <p className="no-margin">Email : <span>mail@example.com </span> </p>
              </div>
            </div> {/* fin footer-contacto-card */}

            <div className="footer-contacto-card">
              <div className="footer-contacto-icono">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="footer-contacto-informacion">
                <h4>Dirección</h4>
                <p className="no-margin">Broome St, NY 10002,California, USA</p>
              </div>
            </div> {/* fin footer-contacto-card */}

          </div> {/*fin footer-contacto */}
           

        </div>
      </div>
     )
}
 
export default Footer;