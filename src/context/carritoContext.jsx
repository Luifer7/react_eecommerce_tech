import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvaider = (props) => {

    
    const [ producto, agregarCarrito] = useState({});
    const [ cambio , guardarCambio] = useState(false);
    const [ mensaje, agregarMensaje] = useState(false);
    const [mostrarcarrito, guardarMostrarCarrito] = useState(true);

    return ( 
        <CarritoContext.Provider
            value={{
                producto,
                cambio,
                mensaje,
                mostrarcarrito,
                agregarCarrito,
                guardarCambio,
                agregarMensaje,
                guardarMostrarCarrito
            }}
        >

            {props.children}
        </CarritoContext.Provider>
     );
}
 
export default CarritoProvaider;