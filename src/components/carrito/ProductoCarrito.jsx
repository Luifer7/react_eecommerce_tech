import formatoPrecio from "../helpers/formatoPrecio";

const ProductoCarrito = ({articulo, eliminaProducto}) => {
    // Elimina el producto
    const eliminarProducto = () => {
        eliminaProducto(articulo);
    } 
    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
        <tr>
            <td>
            <img width={40} height={40} 
            src={url} alt={articulo.nombre} />
            </td>            
            <td className="px-3 fw-bold" >{articulo.nombre}</td>
            <td className="px-3 fw-bold text-success" >{`$${formatoPrecio(articulo.precio)}`}</td>
            <td className="px-3 fw-bold" >{articulo.cantidad}</td>
            
            <td className="px-3" >
                <a 
                href="#!" 
                className="borrar-curso"
                onClick={eliminarProducto}
                >X</a>
            </td>    
        </tr>
      );
}
 
export default ProductoCarrito;