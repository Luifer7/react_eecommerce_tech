import formatoPrecio from "../helpers/FormatoPrecio";
const ArticuloPagar = ({articulo}) => {
    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
      <div className="articuloPagar">
          <div className="articuloPagar-img" style={{paddingBottom: '1rem'}}>
              <img src={url} alt={articulo.nombre} />
          </div>
          <div className="articuloPagar-informacion">
              <h4>{articulo.referencia}</h4>
              <ul>
                  <li><span>Precio: </span>{` $${formatoPrecio(articulo.precio)}`} </li>
                  <li><span>Cantidad: </span>  {articulo.cantidad}</li>
                  <li><span>Subtotal: <span className="articuloPagar-informacion_total">{`$${formatoPrecio(articulo.cantidad * parseInt(articulo.precio)) }`}</span></span></li>
              </ul>
          </div>
      </div>
    );
}
 
export default ArticuloPagar;