
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useHome } from "../../hook/useHome";
import { Link } from "react-router-dom";


const SideBar = (props) => {

    const {categorias: datosCategorias } = useHome()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 260;

    const container = window !== undefined ? () => window().document.body : undefined;

    const categorias = ['uno', 'dos']

    const drawer = (
        <div className="sidebar-drawer pe-3" >
          
          <Link to={'/'} className="text-decoration-none" >
          <h1 className="sidebar-titulo" style={{cursor: 'pointer'}} >Home</h1>
          </Link>
          <hr />
          <div className="sidebar-categorias">
          { 
          datosCategorias.map( (categoria, i) => (
              <div key={i} className="sidebar-categoria_lista">
               <Link className="text-decoration-none" to={`/categorie/${categoria.nombre}/${categoria.id}`}>
               <h2>{categoria.nombre}</h2>
               </Link>
              </div>
            ))}
          </div>

        </div>
      )

    return (
        <div className="header-SideBar mt-1">
            <button
                
                style={{background: 'transparent', border: 'none'}}
                onClick={handleDrawerToggle}
                >
                <i className="bi bi-list h1 m-0 text-white fw-bold"></i>
            </button>
     
                <Drawer
                container={container}
                variant="temporary"
                // anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box"
                    }
                  }}
                >
                {drawer}
                </Drawer>
        </div>
      );
}
 
export default SideBar;