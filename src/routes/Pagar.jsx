import { Fragment, useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ArticuloPagar from "../components/pagar/ArticuloPagar";
import useCarrito from "../hook/useCarrito";
import { CarritoContext } from "../context/carritoContext";

import formatoPrecio from "../components/helpers/formatoPrecio"
import ScrollLink from "../components/helpers/ScrollLink";
import "./styles/pagar.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useProfile } from "../hook/useProfile";
import Spinner from "../components/helpers/Spinner";

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width:'95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

const Pagar = () => {

    const {addSale} = useProfile('perfil')

    //   State del modal 
    const [open, setOpen] = useState(false);
 
    // Utiliza el hook useCarrito
    const {carrito, valortotal, actualizarCarrito, agregarNotificacion,guardarValorTotal } = useCarrito();

    // Utiliza el context
    const {guardarMostrarCarrito} = useContext(CarritoContext)
    useEffect(() => {
        // Oculta carrito
        guardarMostrarCarrito(false); 
    },[])
    // Se le quita 1 porque es su valor inicial
    let totalValor = parseInt(valortotal) - 1;

    const navigate = useNavigate();
    
    const compraConfirmada = (carrito, total) => {
    
        // SETEAR LA COPRA EN BD  IMPORTANT!
        addSale(carrito, total)
        // Muestra modal de agradecimiento
        setOpen(true);
        // Retorna a los valores iniciales
        actualizarCarrito([]);
        agregarNotificacion(1);
        guardarValorTotal(0);
        ScrollLink();
        // Despues de 5 seg redirecciona
        setTimeout(() => {
        navigate("/", { replace: true }); 
        }, 3000);
    }

    return (
        <Fragment>
            <Header />
            
            <div className="pagar container">
                <div className="pagar-contenedor sombra-dark ">
                    <h2>Por favor confirma tu Compra</h2>
                    {carrito.map(articulo => (
                        <ArticuloPagar
                            key={articulo.id}
                            articulo={articulo}
                        />
                    ))}
                    <hr />
                    <div className="pagar-confirmacion">
                        {totalValor > 0 && 
                            <h3>Total: <span>{`$${formatoPrecio(totalValor)}`}</span> </h3>
                        }
                        <button
                            className="btn btn-success"
                            onClick={() => compraConfirmada(carrito, totalValor)}
                        >
                            Confirmar Compra
                        </button>
                        <Modal
                        open={open}
                        >
                            <Box sx={style}>
                                <h2 className="bg-success bg-gradient text-white text-center py-2 fw-bold">Gracias por tu compra</h2>
                                <img src="https://images.pexels.com/photos/2072168/pexels-photo-2072168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                style={{maxWidth: '100%'}} alt="thank-you" />
                                <div className="bg-success text-center py-2 d-flex gap-2 align-items-center justify-content-center" >
                                    <strong className="text-white fw-bold" >Redirigiendo...</strong>
                                    <div className="spinner-border m-2 text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                  
                    </div>
                    
                </div>

            </div>

            <Footer />
        </Fragment>
    );
}
 
export default Pagar;