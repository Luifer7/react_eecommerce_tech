import CardProducto from "./CardProducto"

const CuadriculaProductos = ({productos, nommbreCuadricula}) => {
    return ( 
      
        <div className="row w-100 py-3 m-auto">
            
            <h1 className="text-center py-4 fw-bold text-uppercase">{nommbreCuadricula}</h1>
      
            {
                productos.map((producto, i) => (
                    producto.imagen ?
                    <div className="col-12 col-sm-4 col-md-3 py-2" key={i} >
                        <CardProducto producto={producto} />
                    </div>
                    : null
                ))
            }
        
        </div>

     )
}
 
export default CuadriculaProductos;