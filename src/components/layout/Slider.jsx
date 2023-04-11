import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./layout.css"
import { useNavigate } from "react-router-dom";



const Slider = ({content = Array, haveNavigation = Boolean, tipo = String}) => {

  const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  let [width, setWidth] = useState(getWidth());
  const navigater = useNavigate()

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

    //funcion para limpiar
    return () => {
      // quitamos el listener (simula unMounted)
    window.removeEventListener('resize', resizeListener);
    }
  }, [])

  const getNumber = () => {
    if(width > 992){
        return 5;
    }else if (width > 792) {
        return 4;
    }else if (width > 576){
        return 2;
    } else{
        return 1;
    }
}

const handleNavigation = (item) => {
    navigater(`/categorie/${item.nombre}/${item.id}`)
}

const getSrc = (item) => {
    return `${item}`
}


    return ( 
     
            
                <div  className='my-5' >
                
                        <Swiper                    
                        navigation={true}
                        pagination={true} 
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={getNumber()}
                      
                        >       
                                { content &&
                                content.map( (item, i) => ( 
                    
                                <SwiperSlide key={i} className='p-1' >
                                    { tipo === 'img' &&
                                         <div style={{minWidth: '150px', cursor: 'pointer'}} 
                                         className='m-auto d-flex align-items-center justify-content-center'
                                         onClick={haveNavigation ? () => handleNavigation(item) : null }
                                         >
                                             <img decoding="async" 
                                             className="img"
                                             style={{objectFit: 'contain'}}
                                             width='120'
                                             src={getSrc(item)} 
                                             alt={item.nombre}
                                             loading="lazy"/>
     
                                         </div>
                                    }

                                    {
                                    tipo === 'text' &&
                                    <div style={{cursor: 'pointer'}} 
                                    className='p-1 rounded box-categoria d-flex justify-content-center'
                                    onClick={haveNavigation ? () => handleNavigation(item) : null }
                                    >
                                    <small className="mt-3 fw-bold px-2" >{item.nombre}</small>
                                    </div>
                                    }
                                </SwiperSlide>
                                ))}
                               
                                         
                        </Swiper>

                
                </div>
            
     )
}
 
export default Slider;