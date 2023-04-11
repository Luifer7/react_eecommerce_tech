import BotonAgregar from "../helpers/BotonAgregar"
import { useNavigate } from "react-router-dom"

const CardProducto = ({producto}) => {  

    const navigate = useNavigate()

    const handleNavigate = (producto) => {
        navigate(`/product/${producto.nombre}/${producto.id}`)
    }   
    
    return (
            <div className="card" style={{border: 'none'}} >            
                <div className="card card-contenedor" style={{border: 'none'}} 
                onClick={()=> handleNavigate(producto)}>
                    <img decoding="async"
                    className="pt-2" height={150} style={{objectFit: 'contain'}}
                    src={`https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${producto.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`} />     
                 
                    <div className="card-body text-capitalize" >
                        
                        <div className="" style={{minHeight: '60px'}} >
                        <h2 className="text-start m-0" style={{fontSize: '1em'}} >
                        <small>{producto.marca} {producto.referencia}</small>    
                        </h2>
                        <h3 className="text-start m-0" style={{fontSize: '.9em'}} >
                        <small>{producto.color}</small>    
                        </h3>
                        </div>

                        <div className="my-1" >
                        <strong className="text-success fw-bold" >${producto.precio}</strong>
                        </div>  
                        
                    </div>
              
                </div>
                   <BotonAgregar articulo={producto} estilo='button-55 w-100' />
            </div>

    )
}
 
export default CardProducto