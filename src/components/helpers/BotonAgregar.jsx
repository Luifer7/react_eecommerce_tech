import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import NotificationContext from "../../context/notificationContext";
import { myAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const BotonAgregar = ({articulo, estilo}) => {

    
    const{cambio,guardarCambio, agregarCarrito, agregarMensaje} = useContext(CarritoContext);
    const{success} = useContext(NotificationContext);
    const { usuarioActual } = useContext(myAuthContext)
    const navigater = useNavigate()

    const productoAgregado = () => {
        if (usuarioActual) {
        success()
        agregarCarrito(articulo)
        // Indica que se ha agregado un producto
        guardarCambio(!cambio);
        // Muestra mensaje agregado
        agregarMensaje(true);

        setTimeout(() => {
            // Despues de 3seg lo oculta
            agregarMensaje(false);
        },3000)
        } else {
            navigater('/login')
        }
    }
    return (
        <button 
            className={`fw-bold ${estilo}`}
            onClick={productoAgregado}>
                <strong>Agregar</strong>
             <i className="bi bi-cart4 h4 p-1 m-0"></i>
           
        </button> 
      );
}
 
export default BotonAgregar;