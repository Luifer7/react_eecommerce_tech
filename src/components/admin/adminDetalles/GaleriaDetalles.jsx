import { useParams } from "react-router-dom";
import { Dialog } from "@mui/material"
import { useState } from "react";


const GaleriaDetalles = ({uploadSubmit, uploadChange, imageUploading, 
    imageUploaded, galeria, deleteImage, setPosterImage}) => {

    const {id} = useParams()
    const [open, setOpen] = useState(false)
    const [idEdit, setIdEdit] = useState('')
    const [nombreImagen, setNombreImagen] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        uploadSubmit(id)
        document.getElementById('fileUploadImage').value = ''
    }

    const handleOpen = (id, nombre) => {
       setOpen(true)
       setIdEdit(id)    
       setNombreImagen(nombre)   
    }

    const handleClose = () => {
        setOpen(false)
        setIdEdit('')
    }

    const handlePoster = () => {
        setPosterImage(idEdit, id, nombreImagen) 
        setOpen(false)
    }


    return ( 
        <div className="mt-3 py-3" >
            <h3 className="fw-bold" >Inicia la galeria de producto</h3>

            <div className="w-100 pe-3 pb-3" >
            <form onSubmit={handleSubmit} className='d-flex' >
            <input className="form-control form-control-sm" 
            type="file" name="file" id="fileUploadImage" onChange={(e)=>uploadChange(e.target.files[0])}/>
            <button className="btn btn-primary btn-sm">UPLOAD</button>
            </form>
            </div>

            <span>
                {
                    imageUploading ? 
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div> : ''
                }
            </span>
            <span>
                {
                    imageUploaded ? 'upload success!' : ''
                }
            </span>

          
                <div className="row w-100 mt-2" >
                { 
                    galeria.map((foto, i) => (
                       <div onClick={() => handleOpen(foto.id, foto.imagen)} key={i} 
                       className="col-12 col-sm-6 col-md-4 p-2 box-img" 
                       style={{height: '200px'}}>
                        <img
                        className={`rounded w-100 h-100 ${i === 0 ? 'poster-border' : ''}`} style={{objectFit: 'cover'}}
                        src={`https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${foto.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`} alt="" />
                        <button className="btn-delete-image" onClick={() => deleteImage(foto.imagen, foto.id)} ><i className="bi bi-trash-fill text-danger"></i></button>              
                       </div>
                    ))
                }
                    
                </div>
          
            
            <br />
            
            <Dialog open={open} onClose={handleClose}>
            <div className="m-4 text-center" style={{width: '310px'}} >
            <span className="m-2 fw-bold">
                <i className="fw-bold" >Establecer como portada del producto</i>
            </span>
            <div className="d-flex align-items-center justify-content-center gap-2" >
            <button onClick={handlePoster} className="button-30 mt-3" >Confirmar</button>
            <button onClick={handleClose}  className="button-30 mt-3 text-danger">salir</button>
            </div>
            </div>
            </Dialog>


        </div>
     )
}
 
export default GaleriaDetalles;