import { Link } from "react-router-dom";
import useCarrito from "../../hook/useCarrito";
import ProductoCarrito from "./ProductoCarrito";
import ScrollLink from "../helpers/ScrollLink";
import { useGetWidth } from "../../hook/useGetWidth";

const IconoCarrito = () => {   
    
    // Utiliza el hook useCarrito
    const {carrito, notificacion, eliminaProducto, actualizarCarrito, agregarNotificacion, guardarValorTotal} = useCarrito();
    const { width } = useGetWidth()

    return (        
        <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
            
            <li className="submenu">
                <Link 
                to={'/carrito'} 
                className="nav-link fw-bold text-white position-relative" 
                onClick={ScrollLink}
                >
                     <i className="bi bi-cart4 h4 m-0"></i>
                    {notificacion > 1 
                    ? 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {/* Se le quita 1 porque es su valor inicial */}
                            {notificacion - 1}+
                          
                        </span>
                    :null}                    
                </Link>    
                
                {  width > 585 &&
                    <div className="carrito" >

                    <div className="w-100" >
                    { !carrito.length > 0 
                    ?  
                    <div className="text-center p-4" ><strong>El carrito está vacio!</strong></div> 
                    : 
                    <div className="p-2">

                        <div className="w-100 p-1">
                            <table className="table table-hover">
                                <thead>
                                    <tr className="p-0" >
                                        <th className="px-3">imagen</th>
                                        <th className="px-3" >nombre</th>
                                        <th className="px-3" >precio</th>
                                        <th className="px-3" >cantidad</th>
                                        <th className="px-3" >acciones</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                       
                        <div style={{height: '300px', overflow: 'auto'}} className="box-icono-productos" >
                        <table className="table table-hover w-100" >
                       
     
                            <tbody 
                             
                            >                     
                                {carrito.map((articulo) => (
                                
                                    <ProductoCarrito 
                                    key={articulo.id}
                                    articulo ={articulo}
                                    eliminaProducto = {eliminaProducto}
                                    />
                                ))}
                            </tbody>

                        </table>
                        </div>

                    </div>
                    }
                   
                    {carrito.length > 0 
                        ?   <div className="d-flex py-2 px-2 align-items-center justify-content-start gap-2">
                                <Link
                                    to={'/pagar'} 
                                    className="button-10 color-azul-verde"
                                    onClick={ScrollLink} 
                                >Continuar Compra
                                </Link>
                                
                                <Link 
                                    to={'/carrito'} 
                                    className="button-10 color-azul-azul" 
                                    onClick={ScrollLink}
                                    >
                                        ir al Carrito
                                </Link>

                                  
                                <button 
                                    className="button-10 color-azul-rojo" 
                                    type="button"
                                    onClick={() => (actualizarCarrito([]), agregarNotificacion( 1 ), guardarValorTotal(1))}
                                    >Vaciar 
                                </button>

                            </div>
                        
                        : 
                           ''
                        }
                    </div>
                
                    </div>
                }
                
            
            </li>

        </ul>

      );
}
 
export default IconoCarrito;