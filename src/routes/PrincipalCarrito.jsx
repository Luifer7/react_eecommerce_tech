import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Notificacion from "../components/helpers/Notificacion";
import useCarrito from "../hook/useCarrito";
import PaginaCarrito from "../components/carrito/PaginaCarrito";
import { CarritoContext } from "../context/carritoContext";
import ScrollLink from "../components/helpers/ScrollLink";

const PrincipalCarrito = () => {
    // se toman los productos del carrito del custom hook
    const {carrito, valortotal, notificacion, eliminaProducto, actualizarCarrito, agregarNotificacion, guardarValorTotal} = useCarrito();

    // useContext
   const {guardarMostrarCarrito} = useContext(CarritoContext)

    //    Oculta el carrito
    useEffect(() => {
        guardarMostrarCarrito(false);
    
    }, [])
    return (
        <Fragment>
            <Header />
           
            <div className="principalcarrito m-0 carrito">
                <table className="m-o" >
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>                            
                        {carrito.map((articulo, i) => (
                        
                            <PaginaCarrito 
                            key={i}
                            articulo ={articulo}
                            carrito = {carrito}
                            valortotal={valortotal}
                            notificacion={notificacion}
                            actualizarCarrito={actualizarCarrito}
                            eliminaProducto = {eliminaProducto}
                            guardarValorTotal={guardarValorTotal}
                            agregarNotificacion={agregarNotificacion}
                            />
                        ))}
                    </tbody>
                  
                </table>
                {carrito.length 
                ?
                <div className="principalcarrito-botones">
                    <Link
                        to={'/pagar'} 
                        className="btn btn-success boton-compra mt-3" 
                        type="button"
                        onClick={ScrollLink}
                    >Continuar con la Compra
                    </Link>

                    <button 
                    className="btn btn-primary mt-3" 
                    type="button"
                    onClick={() => (actualizarCarrito([]), agregarNotificacion( 1 ), guardarValorTotal(1))}
                    >Vaciar carrito
                    </button>
                </div>
                :
                <div className="principalcarrito-boton--notificacion">
                    <Notificacion 
                    tipo= 'informacion'
                    mensaje= 'Agrega productos al Carrito'
                    />                    
                </div>
                }
            </div>
        
        <Footer />

        </Fragment>
    );
}
 
export default PrincipalCarrito;