import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrincipalCarrito from "./routes/PrincipalCarrito";
import Admin from "./routes/Admin";
import AdminContent from "./components/admin/AdminContent";
import AdminProductoDetalles from "./components/admin/AdminDetalles";
import Pagar from "./routes/Pagar";
import ProductView from "./routes/ProductView";
import CategorieView from "./routes/CategorieView";
import SearchView from "./routes/SearchView";
import ProfileView from "./routes/ProfileView";
import  {NotificationProvider}  from "./context/notificationContext"

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/> ,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/product/:name/:id",
      element: <ProductView/>,
    },
    {
      path: "/categorie/:name/:id",
      element: <CategorieView/>,
    },
    {
      path: "/search/product/:query",
      element: <SearchView/>,
    },
    {
      path: "/carrito",
      element: <PrincipalCarrito />,
    },
    {
      path: "/pagar",
      element: <Pagar/>,
    },
    {
      path: "/profile/:name/:id",
      element: <ProfileView/>,
    },
    {
      path: "/admin",
      element: <Admin />,
      children: 
      [
        {path: "/admin/dashboard", element: <div className="p-5 mt-4 text-center"><h1>Panel de administracion</h1></div> },
        {path: "/admin/:modulo", element: <AdminContent/> },
        {path: "/admin/:modulo/detalles/:producto/:id/:categoria", element: <AdminProductoDetalles/>}
      ]
    },
    {
      path: "/*",
      element: <NotFound />,
    }, 
      
  ])

  
  return (


          <NotificationProvider>
          {/* Vista de rutas */}
          <RouterProvider router={router} />      
          </NotificationProvider>
 
  )
}

export default App;
