
import { Link } from "react-router-dom";
import { useFixed } from "../../hook/useFixed";
import UserAuth from "../auth/UserAuth";
import IconoCarrito from "../carrito/IconoCarrito";
import FormSearch from "./FormSearch";
import "./layout.css"
import SideBar from "./Sidebar";


const Header = ({categorias}) => {

  const { isFixed, positionStyles} = useFixed()

    return ( 
         
          <header className='w-100 p-3 header-home row justify-content-between align-items-center'
          style={isFixed ? positionStyles : {}}>
            
              <div className="col-12 col-sm-6 col-lg-2 order-1 d-flex gap-2 align-items-center">
                
        
                <SideBar categorias={categorias} />
                
                <Link to={'/'} className='text-decoration-none m-0' >
                <h4 className='text-white fw-bold fuente-titulo m-0 text-center'>
                Eecommerce
                  </h4>
                </Link>
                
              </div>

              {   /** 
                 <div className="col-12 col-sm-10 col-lg-6 order-3 order-lg-2 py-3 m-auto d-flex">
                 <FormSearch/>
                 </div>
                 */ 
              }
               
              <div className="col-12 col-sm-6 col-lg-2 order-2  d-flex align-items-center d-flex justify-content-end">

    
                <div className="d-flex align-items-center d-flex align-items-center gap-2 justify-content-center" >
                 
                <IconoCarrito />
                <UserAuth/>
                </div>
              
              </div>
        
          </header>
     )
}
 
export default Header