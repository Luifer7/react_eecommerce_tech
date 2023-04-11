import { useContext, Fragment } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Notificacion from '../components/helpers/Notificacion';
import SeccionesProducto from "../components/producto/SeccionesProducto";
import { CarritoContext } from '../context/carritoContext';
import '../styles/index.css';
import Banner from '../components/layout/Banner'
import CuadriculaProductos from '../components/temporal/CuadriculaProductos';
import Slider from '../components/layout/Slider';
import lista from '../components/helpers/listas';
import { useHome } from '../hook/useHome';
import NotificationContext from '../context/notificationContext' 

const Home  = () => {

   const {mensaje} = useContext(CarritoContext);
   const {categorias, productos, marcas } = useHome() 
   const {notification, isActive} = useContext(NotificationContext);
   

    return ( 
        <Fragment>

            <Header categorias={categorias} />
         
            <Banner />

            <Slider content={categorias} haveNavigation={true} tipo='text' />
         
           <div className="px-4 mt-5">
           <SeccionesProducto
           productos={productos}
           categorias={lista}
            />
           </div>
            
            <CuadriculaProductos
             productos={productos}
             nommbreCuadricula='productos'
            />

            <br />

            <Slider content={marcas} tipo='img' haveNavigation={false} />
            
            {isActive ? <Notificacion tipo='agregado' mensaje={`agregado al carrio ${notification}`} />:null}
            
           

           <Footer />
        
        </Fragment>
     )
}
 
export default Home