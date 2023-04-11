import { Dialog } from "@mui/material"
import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

const BodyTableProductos = ({paginationData, editData, deleteData}) => {

    const [ editNombre, setEditNombre] = useState('')
    const [open, setOpen] = useState(false)
    const [ deleteId, setDeleteId] = useState('')

    // GET date
    const getInfoDate = (info) => {
        let dateWork = new Date(info)
        let y = dateWork.getFullYear()
        let m = dateWork.getMonth() + 1
        let d = dateWork.getDate()
        let h = dateWork.getHours()
        let mi = dateWork.getMinutes()
        let s = dateWork.getSeconds()
        let docDate = `
        ${d}/${m < 10 ? `0${m}` : m }/${y < 10 ? `0${y}` : y }
        ${h < 10 ? `0${h}` : h }:${mi < 10 ? `0${mi}` : mi }: ${s < 10 ? `0${s}` : s} 
        `
        return docDate
    }
    
    // DELETE
    const handleClickOpen = (id) => {
      setOpen(true)
      setDeleteId(id)
    }
    const handleClose = () => {
      setOpen(false)
      setDeleteId('')
    }
 
    const handleDelete = () => {
        setOpen(false)
        deleteData(deleteId)
        setDeleteId('')
    }

  
    return ( 
        <Fragment>
            <tbody>
            {
                paginationData().map((info, i) => (
                    <tr key={i} >
                    
                    <th className="custom-td-fecha">
                    <i className="fw-bold p-0" >{getInfoDate(info.date)}</i>
                    </th>
                    
                    <td>
                        <i>{info.nombre}</i>
                    </td>
                    <td>
                        <i>{info.tipo}</i>
                    </td>
                     
                    <td>
                 
                     <i>{info.referencia}</i>
                    
                    </td>
                    
                    <td>
                    <i>{info.precio}</i>
                    </td>

                    <td className="d-flex m-0 gap-3 align-items-center justify-content-center custom-td-acciones">
                         
                    <button
                    className="btn-delete"
                     onClick={() =>handleClickOpen(info.id)}
                     style={{border: 'none', background: 'none'}}>
                    <i className="bi bi-trash-fill" ></i>
                    </button>

                   
                    <Link to={`/admin/productos/detalles/${info.nombre}/${info.id}/${info.categoria}`} >
                    <button
                    className="btn-show"
                     style={{border: 'none', background: 'none'}}>
                    <i className="bi bi-eye-fill h5 m-0"></i>
                    </button>
                    </Link>

                    </td>
                    
                    </tr>
                ))
            }
        </tbody>

        { /** DIALOG */ }
        <tbody>
            <Dialog open={open} onClose={handleClose}>
            <div className="m-4 text-center" style={{width: '310px'}} >
            <span className="m-2 fw-bold">
                <i>Está seguro de borrar este documento?</i>
            </span>
            <button onClick={handleDelete} className="button-30 mt-3" >Confirmar</button>
            </div>
            </Dialog>
        </tbody>
        
        </Fragment>

     )
}
 
export default BodyTableProductos