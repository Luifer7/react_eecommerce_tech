import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../context/carritoContext";

const useCarrito = () => {
    
      // utiliza los datos del context (toma el producto agregado)
    const {cambio, producto, agregarCarrito} = useContext(CarritoContext);
          // muestra los productos de localStorage
    let productosIniciales = JSON.parse(localStorage.getItem('productos'));
    if(!productosIniciales){
        productosIniciales = [];
    }


    // Muestra las notificacion de localStorage
    let notificacionesIniciales = JSON.parse(localStorage.getItem('notificaciones'));
    if(!notificacionesIniciales){
        notificacionesIniciales = 1; // se agrega 1 para que la variable pueda existir
    }

    // Muestra el valor total de localStorage
    let valorTotalInicial = JSON.parse(localStorage.getItem('valortotal'));
    if(!valorTotalInicial){
        valorTotalInicial = 1; // se agrega 1 para que la variable pueda existir
    }

    // state del componente
    const [carrito, actualizarCarrito] = useState(productosIniciales);
    const [notificacion , agregarNotificacion] = useState(notificacionesIniciales);
    const [valortotal, guardarValorTotal] = useState(valorTotalInicial);
  

    // elimina un producto del carrito  
    const eliminaProducto = (producto) => {

        if(producto.cantidad > 1){
            // Actualiza la cantidad
            const cantidadCarrito  = carrito.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad --;
                     return articulo;
                }else{
                    return articulo;
                }

            })
            actualizarCarrito(cantidadCarrito);
        }else if(producto.cantidad === 1){
            // Elimina del carrito
            const carritoActualizado  = carrito.filter(articulo => articulo.id !== producto.id);
            actualizarCarrito(carritoActualizado);
        }
      
        let numero = notificacion - 1;
        agregarNotificacion( numero )
        // Actualiza el valor total
        let valor = valortotal - parseInt(producto.precio)
        guardarValorTotal(valor)
    }

    const agregaLocalStorage = () => {
        // Valida productos
        if(productosIniciales){
            localStorage.setItem('productos', JSON.stringify(carrito));
        }else{
            localStorage.setItem('productos', JSON.stringify([]));
        }
        // Valida notificaciones 
        if(notificacionesIniciales){
            localStorage.setItem('notificaciones', JSON.stringify(notificacion));
        }else{
            localStorage.setItem('notificaciones', JSON.stringify(1));
        }

        // Valida valor total 
        if(valorTotalInicial){
            localStorage.setItem('valortotal', JSON.stringify(valortotal));
        }else{
            localStorage.setItem('valortotal', JSON.stringify(1));
        }
    }

    const carritoAgregar = () => {
        //  Se valida si ya el producto se encuentra en el carrito
        const existe = carrito.some(articulo => (articulo.id === producto.id));
    
        if(existe){
        // Actualizamos la cantidad
        const cantidadCarrito  = carrito.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad ++;
                    return articulo;
                }else{
                    return articulo;
                }

            })
            actualizarCarrito(cantidadCarrito);

        }else {
            // agregamos el producto
            actualizarCarrito(
                [...carrito, producto]
            )
        }
       
        let numero = notificacion + 1;
        agregarNotificacion( numero )

        guardarValorTotal(valortotal + parseInt(producto.precio));
        // coloca el valor por defecto para poder agregar otro producto
        agregarCarrito({})
    }
 
    useEffect(() => {
     
        const muestraProducto = () => {

            // Agrega a localStorage
            agregaLocalStorage();

            // valida que se le haya dado agregar a un producto
            if(Object.entries(producto).length === 0) return;

            // Se coloca la cantidad por defecto en caso de no tenerla  
            if(!producto.cantidad){
                producto.cantidad = 1;
            }
            // Se agrega al carrito
            carritoAgregar();
           
            }

        muestraProducto();
        // console.log('hola desde effect ');

    }, [cambio, carrito, notificacion])

    return {
        carrito, 
        notificacion,
        valortotal,
        eliminaProducto,
        actualizarCarrito, 
        agregarNotificacion,
        guardarValorTotal
    };
}
 
export default useCarrito;