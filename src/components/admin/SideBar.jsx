
import { NavLink } from "react-router-dom"

const AdminSidebar = () => {



let activeStyle = {
  transition: '.6s ease all', 
  textDecoration: "none", 
  color: '#0275d8'
}

return ( 
        <>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" 
          style={{width: '210px', height: '100vh'}}>

          { /**DASHBOARD ADMIN */ }
          <div  className="text-center">
          <NavLink to={'/admin/dashboard'} style={{textDecoration: 'none'}} >
          <span className="fs-4 fw-bold text-primary text-uppercase"
          style={{textShadow: '1px 2px 1px black', letterSpacing: '1px'}}
          >Dashboard
          </span>
          </NavLink>
          </div>
          <hr/>
            
          { /**LINKS RUTAS ADMIN */ }
          <div className="d-flex gap-3 mt-2 flex-column mb-auto py-2 px-1" 
          style={{listStyle: 'none', maxHeight: '350px', overflow: 'auto'}}>

           
          <NavLink to={'/admin/categorias'}>categorias</NavLink>

          <NavLink to={'/admin/productos'}>productos</NavLink>
            
          </div>
            
          <hr/>
          
          { /**LINKS RUTA CONFIGURACION, PERFIL Y CERRAR */ }
          <div className="dropdown">
          <a  className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
              
              <strong style={{cursor: 'pointer'}} >Configuracion</strong>
          </a>
          <ul className="dropdown-menu text-medium shadow" aria-labelledby="dropdownUser2">
            <NavLink to={'/'} className='text-decoration-none' >
            <li style={{cursor: 'pointer'}} >
            <span className="dropdown-item fw-bold text-danger">Principal</span>
            </li>
            </NavLink>
          </ul>
          </div>
  
        </div>
        </>
     )
}
 
export default AdminSidebar