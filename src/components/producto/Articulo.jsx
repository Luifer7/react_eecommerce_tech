
import { useState } from "react";
import { Link } from "react-router-dom";
import BotonAgregar from "../helpers/BotonAgregar";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Fade } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width:'95%',
    border: 'none',
    boxShadow: 24,
    p: 0,
  }

const Articulo = ({articulo}) => { 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
    
    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo?.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
            <div className="card card-contenedor">   
                <div className="border p-1 d-flex align-items-center justify-content-center" 
                style={{minHeight: '79px'}} > 
                <h2 className="card-header__font">{articulo.marca} {articulo.referencia}</h2>
                </div>

                <div className="w-100 bg-light">
                        <img 
                        className="pt-2 w-100" height={150} 
                        style={{objectFit: 'contain', backgroundPosition: 'center'}}
                        decoding="async" 
                        src={url} 
                        alt={articulo.referencia}
                        onClick={handleOpen}
                        
                         /> 
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Fade in={open} >
                        <Box sx={style}>
                            <img 
                            className="w-100"
                            src={url} 
                            alt={articulo.referencia}
                            /> 
                        </Box>
                        </Fade>
                    </Modal>
                </div>

                <div className="card-body card-body__contenedor" >
                   
                    <h3 className="card-descuento__texto">60% off envio gratis<i className="bi bi-lightning-fill"></i> <span className="card-descuento__precio"> {`$${(parseInt(articulo.precio)*2.5)}`} </span></h3>
                  
                
                    <h4 className="card-precio">Precio: <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span></h4> 

                    <div className="card-botones">                          
                            <BotonAgregar 
                                articulo={articulo}
                                estilo="btn btn-outline-secondary btn-sm"
                            />

                            <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='enlace-cuenta'>
                                ver mas
                            </Link>                

                    </div> 
                </div>
              
            </div>
    )
}
 
export default Articulo;