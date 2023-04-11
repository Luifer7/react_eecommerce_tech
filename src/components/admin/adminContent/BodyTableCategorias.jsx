import { Dialog } from "@mui/material"
import { Fragment, useState } from "react"

const BodyTablecategorias = ({paginationData, editData, deleteData}) => {

    const [ editNombre, setEditNombre] = useState('')
    const [ showInput, setShowInput] = useState(false)
    const [ idItem, setIdItem] = useState('')
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

    // EDIT
    const handleChange = (e) => {
     setEditNombre(e.target.value)  
    }

    const showEdit = (id, nombre) => {
       setIdItem(id)
       setShowInput(!showInput)
       setEditNombre(nombre)
    }

    const handleSubmitEdit = (e, dataName) => {
        e.preventDefault()
        if (editNombre === dataName) {
            setShowInput(!showInput)
            setEditNombre('')
            setIdItem('')
        } else {
            editData(editNombre, idItem, 'nombre')
            setShowInput(!showInput)
            setEditNombre('')
            setIdItem('')
        }
      
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
                    
                    <th
                    className="custom-td-fecha"
                    >
                    <i className="fw-bold p-0" >{getInfoDate(info.date)}</i>
                    </th>
                    
                    <td>

                       {
                         showInput && idItem === info.id
                         ? ''
                         : <i>{info.nombre}</i>
                       }

                       {
                        showInput && idItem === info.id && 
                        <form onSubmit={(e) =>handleSubmitEdit(e, info.nombre)} >
                        <input type="text" value={editNombre} 
                        onChange={handleChange}
                        autoFocus
                        className="rounded form-edit" 
                        /> 
                        </form>
                       }

                    </td>

                    <td className="d-flex m-0 gap-3 align-items-center justify-content-center custom-td-acciones">
                        
                    <button 
                    onClick={() =>showEdit(info.id, info.nombre)}
                    style={{border: 'none', background: 'none'}} 
                    disabled={showInput && idItem != info.id} >
                    <i className={showInput && idItem === info.id ? 'bi bi-pencil-fill text-primary' : 'bi bi-pencil'}></i>
                    </button>
                    
                    <button
                    className="btn-delete"
                     onClick={() =>handleClickOpen(info.id)}
                     style={{border: 'none', background: 'none'}}>
                    <i className="bi bi-trash-fill" ></i>
                    </button>

                    </td>
                    
                    </tr>
                ))
            }
        </tbody>
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
 
export default BodyTablecategorias