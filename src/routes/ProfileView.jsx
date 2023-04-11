import {  Fragment, useContext, useState } from "react"
import { format, formatDistance } from 'date-fns'
import { es } from 'date-fns/locale/'
import "./styles/profile.css"
import { useProfile } from "../hook/useProfile"
import Header from "../components/layout/Header"
import { myAuthContext } from "../context/authContext"
import { useParams } from "react-router-dom"
import formatoPrecio from "../components/helpers/formatoPrecio"

const ProfileView = () => {

    const { usuarioActual } = useContext(myAuthContext)
    const {id} = useParams()
    const [selectedDate, setSelectedDate] = useState(null)
    const {datos: compras} = useProfile('perfil', id)

    const handleChange = (e) => {
        setSelectedDate(e.target.value)
    }

    const filterCompras = () => {
        let comprasFiltradas = selectedDate === null 
        ? compras 
        : compras.filter((field => getFormatDate(field.fecha, 'sin hora') == selectedDate))
        return comprasFiltradas
    }

    const getFormatDate = (fecha, variante) => {
        
        if (fecha) {

            if (variante === 'con hora') {
            return format(fecha, "dd 'de' MMMM 'del' yyyy 'a las' H:MM aaa",
            {locale: es})
            }

            if (variante === 'sin hora') {
            return format(fecha, "dd 'de' MMMM 'del' yyyy",
            {locale: es})
            }  

            if (variante === 'formatdistance') {
            return formatDistance(fecha, Date.now(),{
            locale: es
            })
            }
        
        }

    }

 
    return ( 
    
        <Fragment>
            <Header/>

            <div className="w-100 py-4 px-2" >

                <div className="d-flex  align-items-start justify-content-between flex-wrap-reverse px-3 gap-4" >
                    <h1 className="text-center fw-bold m-0" >Tu historial de compras</h1>
                   
                   
                    <div className="d-flex gap-2 fw-bold">
                        <img width={80} height={30} 
                        className="img-thumbnail rounded-circle"
                        src="https://w7.pngwing.com/pngs/761/610/png-transparent-account-avatar-human-people-person-profile-user-random-icon-thumbnail.png" alt="" />
                        <div className="d-flex flex-column gap-2" >
                        <span><i>{usuarioActual?.email}</i></span>
                        <span><i>Miembro hace {getFormatDate(parseInt(usuarioActual?.metadata?.createdAt), 'formatdistance')}</i></span>
                        <span><i>Ultimo login {getFormatDate(parseInt(usuarioActual?.metadata?.lastLoginAt), 'formatdistance')}</i></span>
                        </div>
                    </div>
                </div>
            
                <div className="mx-3 mt-5" >
                    <select className="form-control form-control-sm w-50"  onChange={handleChange}> 
                        { compras && compras.map((d, i) => ( 
                        <option key={i} value={getFormatDate(d.fecha, 'sin hora')}>
                            {getFormatDate(d.fecha, 'sin hora')}
                        </option>))}
                    </select>
                </div>

                {
                compras &&
                filterCompras().map((c, i) => ( 
                <div key={i} className="mx-3 mb-3 d-flex flex-column articuloPagar">
                    
                    <div className="d-flex justify-content-between">
                        <strong className="fw-bold text-dark"> 
                        {getFormatDate(c.fecha, 'con hora')}</strong>

                        <small className="text-muted" >{getFormatDate(c.fecha, 'formatdistance')}</small>
                    </div>
                
                <div className="d-flex py-2 px-2 gap-4" style={{overflow: 'auto'}} >
                        {
                            c.compra.map((d, i) =>(
                                <div className="d-flex align-items-center gap-1 px-2" 
                                style={{minWidth: '150px'}} key={i}>
                                    <img width={50} height={50} 
                                    style={{objectFit: 'contain'}}
                                    className="img-thumbnail rounded-circle"
                                    src={`https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${d.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`} alt="" />
                                    <div className="d-flex flex-column align-items-start justify-content-between" >
                                    <small className="text-dark fw-bold" >{d.referencia}</small>
                                    <small className="text-success fw-bold">${formatoPrecio(d.precio)}</small>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="d-flex justify-content-end">
                    <h4 className="text-success fw-bold m-0 mx-2" ><small className="text-muted">Total: </small>${formatoPrecio(c.total)}</h4>
                    </div>

                </div>
                ))
                }
         

            </div>
       </Fragment>
     )
}
 
export default ProfileView;