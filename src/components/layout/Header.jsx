
import { Link } from "react-router-dom";
import { useFixed } from "../../hook/useFixed";
import UserAuth from "../auth/UserAuth";
import IconoCarrito from "../carrito/IconoCarrito";
import FormSearch from "./FormSearch";
import "./layout.css"
import SideBar from "./Sidebar";
import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";


const Header = ({categorias}) => {

  const {compra} = useContext(CarritoContext)
  const { isFixed, positionStyles} = useFixed()

    return ( 
         
          <header className='w-100 p-3 header-home row justify-content-between align-items-center gap-4 gap-sm-0'
          style={isFixed ? positionStyles : {}}>

              {JSON.stringify(compra)}
              <strong>{
                compra &&
                compra.map((g,i) => (
                  <small key={i}>
                    {g.id}
                  </small>
                ))
                }</strong>

              <div className="col-12 col-sm-6 col-lg-2 order-1 d-flex gap-2 p-1 align-items-center">
                
        
                <SideBar categorias={categorias} />
                
                <Link to={'/'} className='text-decoration-none m-0' >
                <h4 className='text-white fw-bold fuente-titulo m-0 text-center'>
                Eecommerce
                  </h4>
                </Link>
                
              </div>
     
              <div className="col-12 col-sm-6 col-lg-2 order-2  
              d-flex align-items-center d-flex justify-content-end gap-2">

    
                <div className="d-flex align-items-center d-flex align-items-center gap-4 justify-content-center">
                <IconoCarrito />
                <UserAuth/>
                </div>
              
              </div>
        
          </header>
     )
}
 
export default Header