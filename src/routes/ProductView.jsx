import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
//import Header from "../components/layout/Header";
import ContentZoom from "react-content-zoom";
import BotonAgregar from "../components/helpers/BotonAgregar"
import Slider from "../components/layout/Slider"
import "./styles/productview.css"
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useHome } from "../hook/useHome";
import CuadriculaProductos from "../components/temporal/CuadriculaProductos";
import NotificationContext from "../context/notificationContext";
import Notificacion from "../components/helpers/Notificacion";

const ProductView = () => {
    
    const {notification, isActive} = useContext( NotificationContext );
    const {categorias} = useHome()

    const {name, id} = useParams()
    const [ producto, setProducto] = useState({})
    const [galeria, setGaleria] = useState([])
    const [similares, setSimilares] = useState([])
    const [ url, setUrl] = useState('')
    const [boll, setBoll] = useState(true)
    
    useEffect(() => {
    setBoll(false)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const q = query(collection(db, "productos"), where("id", "==", id))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = []
    querySnapshot.forEach((doc) => {
    data.push(doc.data())
    })
    setProducto(data[0])
    setUrl(`https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${data[0].imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`)
    setBoll(true)
    if (data) {
        const q = query(collection(db, "productos"), where("categoria", "==", data[0]?.categoria))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const similares = []
        querySnapshot.forEach((doc) => {
        similares.push(doc.data())
        })
        setSimilares(similares.filter((field => field.id != data[0]?.id)))
        })
    }

    })

    const qg = query(collection(db, "imagenes"), where("idProducto", "==", id))
    const unsubscribeq = onSnapshot(qg, (querySnapshot) => {
    const galeria = []
    querySnapshot.forEach((doc) => {
    galeria.push(doc.data())
    })
    setGaleria(galeria)
    })
    

    },[id])

    const handleUrl = (img) => {
        setBoll(false)
        setUrl(`https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${img.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`)
        setTimeout(() => {
            setBoll(true)
        }, 400);
    }

    const contentMarcas = [
        'https://www.compulago.net/wp-content/uploads/2020/12/logitech-1.png', 
        'https://www.compulago.net/wp-content/uploads/2020/12/dell-1.png', 
        'https://www.compulago.net/wp-content/uploads/2020/12/samsun.png',
        'https://www.compulago.net/wp-content/uploads/2020/12/lenovo-1.png',
        'https://www.compulago.net/wp-content/uploads/2020/12/asus-b.png'
    ]
    
    return ( 
        <Fragment>
            
            <Header/>

                <div className="w-100 py-4 px-2">

                    <Slider content={categorias} tipo='text' haveNavigation={true} />

                    <h1 className="px-3 text-uppercase fw-bold mt-3">
                        {producto?.marca} {producto?.referencia}  </h1>
                    <hr />
                    
                    <div className="w-100 row p-2">
                
                        <div className="text-center rounded col-12 col-sm-6" >
                        
                            <div  > 
                            { boll && url ?
                                <ContentZoom 
                                zoomPercent={200} 
                                largeImageUrl={url}
                                imageUrl={url}
                                contentHeight={400}
                                />
                                : <div  style={{minHeight: '400px', transition: '.6s ease all'}} 
                                className="d-flex align-items-center justify-content-center" >loading...</div>
                            } 
                        
                            </div>

                            <div className="p-2 d-flex align-items-center gap-2 justify-content-center" >
                                {
                                    galeria.map((img, i) => (
                                    
                                        <img key={i} width='80' height='80' 
                                        style={{cursor: 'pointer'}}
                                        className="border rounded-circle p-1 img-item"
                                        src={`https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${img.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`}
                                        onClick={()=> handleUrl(img)}
                                        alt="no disponible" />      
                                    ))
                                }
                            </div>

                        </div>

                        <div className="d-flex col-12 col-sm-6 flex-column justify-content-between" >
                            <div className="mt-2 mt-sm-0" >
                            <h1 className="px-1 fw-bold" ><i>Detalles</i></h1>
                            <ul className="p-4" >
                                <li><strong>Referencia:  <i>{producto.referencia}</i> </strong></li>
                                <li><strong>Marca: <i>{producto.marca}</i> </strong></li>
                                <li><strong>Tipo: <i>{producto.tipo}</i> </strong></li>
                                <li><strong>SO: {producto.sistemaoperativo} </strong></li>
                                <li><strong>Color: {producto.color} </strong></li>
                                <li><strong>Garantia: {producto.garantia} </strong></li>
                            </ul>
                            <h1 className="text-success m-0 px-1 fw-bold" >${producto.precio}</h1>
                            </div>
                                    
                        <div className="d-flex flex-column" >

                        <BotonAgregar estilo="button-70 button-blue btn-lg" articulo={producto} />
                            
                            <Link
                            to={'/pagar'} 
                            className="button-70 button-green text-decoration-none fw-bold"           
                            >Continuar con la Compra
                            <i className="bi bi-cash-stack mx-2"></i>
                            </Link>
                        
                        </div>
                        
                        </div>

                    </div>
                    
                    <br/>
                    <CuadriculaProductos productos={similares} nommbreCuadricula='Productos relacionados' />
                    <br />
                    <Slider content={contentMarcas} haveNavigation={false} tipo='img' />

                </div>
            
                {isActive ? <Notificacion tipo='agregado' mensaje={`agregado al carrio ${notification}`} />:null}
                                   
            <Footer/>
        
        </Fragment>
     )
}
 
export default ProductView