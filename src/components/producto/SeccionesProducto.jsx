import { Fragment, useEffect, useState } from "react";
import Articulo from "./Articulo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Spinner from "../helpers/Spinner"

const SeccionesProducto = ({productos, categorias}) => {

  const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  let [width, setWidth] = useState(getWidth());

  //el useEffect se ejecutara una sola vez por que no tiene dependencias
  useEffect(() => {
    // para limpiar el timeout
    let timeoutId = null;
    const resizeListener = () => {
      //previene la ejecucion antes del timeout
      clearTimeout(timeoutId);
      // cambia el estado despues de 100milisegundos
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    }
    // agregamos el listener rezise
    window.addEventListener('resize', resizeListener);

    // funcion para limpiar
    return () => {
      // quitamos el listener (simula unMounted)
    window.removeEventListener('resize', resizeListener);
    }
  }, [])

  const getNumber = () => {
    if(width > 992){
        return 4;
    }else if (width > 792) {
        return 3;
    }else if (width > 576){
        return 2;
    } else{
        return 1;
    }
}


    return ( 
        <Fragment>
                        
            { 
            categorias.map( (categoria, i) => (
                <div key={i} className='my-5' >
                    <h2 className="categoria-header">{categoria.nombre}</h2>
                    
                        {!productos[0] && <Spinner />}
                        <Swiper                    
                        navigation={true}
                        pagination={true} 
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={getNumber()}
                      
                        >       
                                {
                                
                                productos.map( (articulo, i) => ( 
                                    articulo.lista === categoria.id && articulo.imagen
                                ?<SwiperSlide key={i}>
                                    <Articulo                                        
                                    articulo={articulo}
                                    />
                                </SwiperSlide>
                                : null
                                ))
                              
                                }
                                                
                        </Swiper>
              
                </div>
            ))
            }

        </Fragment>
     )

}
 
export default SeccionesProducto;