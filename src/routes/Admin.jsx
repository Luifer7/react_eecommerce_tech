
import TemporaryDrawer from "../components/admin/Drawer";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/admin.css"
import React, { useRef } from "react";
import AdminContext from "../context/adminContext"


const Admin = () => {

    const location = useLocation()
    const nodeRef = useRef(null)

    return ( 
        <AdminContext>
            <div className="vistas-admin w-100" >
                    
                <div className='drawer text-center p-1' >
                <TemporaryDrawer/>
                </div>
                
                <SwitchTransition>
                <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={300}
                classNames="page">

                <div className="bg-ligth w-100 text-white oulet" 
                ref={nodeRef}>
                <Outlet></Outlet>
                </div>

                </CSSTransition>
                </SwitchTransition>

            </div>  
        </AdminContext>
     )
}
 
export default Admin;