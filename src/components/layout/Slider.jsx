import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./layout.css"
import { useNavigate } from "react-router-dom";
import { useGetWidth } from "../../hook/useGetWidth";



const Slider = ({content = Array, haveNavigation = Boolean, tipo = String}) => {

  const navigater = useNavigate()
  const { width } = useGetWidth()
  
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