
import formatoPrecio from "../helpers/formatoPrecio";

const PaginaCarrito = ({articulo, carrito, valortotal,notificacion, eliminaProducto, actualizarCarrito, guardarValorTotal, agregarNotificacion}) => {
    // Elimina el producto
    const restaProducto = () => {
        eliminaProducto(articulo);
    } 
    const adicionaProducto = () => {
        const carritoActualizado  = carrito.map(producto => {
            if(producto.id === articulo.id){
                producto.cantidad ++;
                return producto;
            }else{
                return producto;
            }

        })
        actualizarCarrito(carritoActualizado);

        let numero = notificacion + 1;
        agregarNotificacion( numero )

        // Actualiza el valor total
        let totalValor = valortotal
        guardarValorTotal(totalValor + parseInt(articulo.precio))
    }
    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
        <tr>
            <td><img className=" " style={{width: '90px', borderRadius: '50%', height: '90px'}} src={url} alt={articulo.nombre} /></td>            
            <td>{articulo.nombre}</td>
            <td>{`$ ${formatoPrecio(articulo.precio)}`}</td>
            <td>
                <ul className="carrito-contador pagination no-margin">
                    <li className="page-item">
                        <a 
                        className="page-link" 
                        href="#!" 
                        onClick={restaProducto} 
                        aria-label="Previous"
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </a>                   
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">{articulo.cantidad}</a>
                    </li>
                    <li className="page-item">
                        <a 
                        className="page-link" 
                        href="#!" 
                        onClick={adicionaProducto} 
                        aria-label="Previous"
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </a>                   
                    </li>
                </ul>
            </td>            
            <td>{`$ ${formatoPrecio(articulo.cantidad * parseInt(articulo.precio)) }`}</td>         
        </tr>
      );
}
 
export default PaginaCarrito;