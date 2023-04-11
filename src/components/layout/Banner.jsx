
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import  banners  from '../helpers/banners';
import "./layout.css"

const Banner = () => {
 
    return (
        <div>
             <Swiper                    
                pagination={true} 
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                
            >       
                   {banners.map((portada, i) => (
                        <SwiperSlide  
                        key={i}
                        >
                         <div className="portadas" 
                         style={
                          {backgroundImage: `url(${portada.imagen})`, 
                          objectFit: 'cover', backgroundPosition: 'center'}}>
                            <div className="portadas-container">
                            <div className="container portada-container__header">
                            <h1 className="portada-header">Las mejores ofertas de {portada.mes}
                            <button className='button-92 p-2 mt-2 px-3 rounded' >Descubre lo que tenemos para ti</button></h1>
                        </div>
                        </div>          
            
                        </div>
                        </SwiperSlide>

                   ))}
                 
                    
                                         
            </Swiper>
        </div>
      );
}
 
export default Banner;