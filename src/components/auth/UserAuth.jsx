

import { useContext } from "react";
import { Link } from "react-router-dom";
import { myAuthContext } from "../../context/authContext";
import "./auth.css"

const UserAuth = () => {
  
    const { isLogin, userLogout, isResolve, usuarioActual } = useContext(myAuthContext)
    
    return ( 
      <div className="d-flex align-items-center justify-content-center" >

        { isResolve 
        ?
        <div  className="d-flex align-items-center justify-content-center gap-2">

         
                  {
                    usuarioActual?.uid != null ?
                    usuarioActual?.uid === 'lq9wzLEUFqYN5ngFKUyNKQDfSCB3'
                    || usuarioActual?.uid === 'ge4UxFkVu6cAamqeYK5E811zc3J2' 
                    ?  <Link to="/admin/productos"  className="fw-bold fst-italic">
                    <i className="text-white bi bi-person-fill h2"></i>
                    </Link>
                    : <Link to={`/profile/${usuarioActual?.displayName}/${usuarioActual?.uid}`}  className="fw-bold fst-italic">
                    <i className="text-white bi bi-person h2"></i>
                    </Link>
                    : null
                  }

                
                {
                    isLogin &&
                    <span className="link-text-span actions-link" role='button'
                    onClick={userLogout}
                    >
                    Logout
                  </span>   
                }

              <div className="d-flex flex-column mx-2" >

                {
                    !isLogin &&
                    <Link to={'/login'}  className="link-text-span actions-link">
                    Login
                  </Link>   
                }

                {
                    !isLogin &&
                    <Link to={'/register'}  className="link-text-span actions-link">
                    register
                  </Link>
                }
              </div>

        </div> 
        :
        <div 
        className="spinner-border 
        text-dark spinner-border-sm 
        d-flex align-items-center 
        justify-content-center gap-2 mx-3 p-2" 
        role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        } 
      </div>
    )

}
 
export default UserAuth