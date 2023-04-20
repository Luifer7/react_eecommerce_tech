import {Fragment, useContext, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CuadriculaProductos from "../components/temporal/CuadriculaProductos";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import Notificacion from "../components/helpers/Notificacion";
import NotificationContext from "../context/notificationContext";

const CategorieView = () => {

  const {notification, isActive} = useContext( NotificationContext );
  const {name, id} =useParams();
  const [ productos, setProductos] = useState()


  useEffect(() => {
    const q = query(collection(db, "productos"), where("categoria", "==", id))
    const unsubscribeq = onSnapshot(q, (querySnapshot) => {
    const datos = []
    querySnapshot.forEach((doc) => {
    datos.push(doc.data())
    })
    setProductos(datos)
    })   
  },[id])

    return (
      <Fragment>

        <Header/>


          
        <div className="w-100 py-4 px-2">

        {
         productos ?
        <CuadriculaProductos
        productos={productos}
        nommbreCuadricula={name}
        />
        : <div style={{minHeight: '90vh'}} className="w-100 d-flex align-items-center justify-content-center" >
            <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        
        </div>

        {isActive ? <Notificacion tipo='agregado' mensaje={`agregado al carrio ${notification}`} />:null}
        
        <Footer />
      
      </Fragment>
      );
}
 
export default CategorieView;