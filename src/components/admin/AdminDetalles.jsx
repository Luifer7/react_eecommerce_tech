import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { myAdminContext } from "../../context/adminContext"
import GaleriaDetalles from "./adminDetalles/GaleriaDetalles"

export const ItemDetalles = (
    {nombre, 
    infoDato,
    id,
    showEdit, 
    getDisabledPencil, 
    getClassPencil,
    handleSubmitEdit,
    handleChange,
    textEdit
    }) => {
    return (
        <div className="d-flex w-100" >

            <div style={{minWidth: '150px'}} >
                <strong>{nombre}</strong>
            </div>
            
            <div style={{minWidth: '150px'}} className='d-flex' >

                <button onClick={()=>showEdit(infoDato, id)}

                style={{border: 'none', background: 'none'}}
                disabled={getDisabledPencil(infoDato)} 
                >
                <i className={`
                ${getClassPencil(infoDato) 
                ? 'bi bi-pencil-fill text-white' 
                : 'bi bi-pencil'}`}></i>
                </button>
                {
                    getClassPencil(infoDato) 
                    ? <form onSubmit={(e)=>handleSubmitEdit(e, infoDato, nombre)}>
                        <input 
                        onChange={handleChange} 
                        value={textEdit} 
                        className="form-control form-control-sm" autoFocus type="text"/>
                      </form>
                    : <strong>{infoDato}</strong>
                }
                  

            </div>

        </div>
    )
}

const AdminProductoDetalles = () => {

    const {
    data, editData, uploading, isResolve,
    imageUploading, imageUploaded, uploadSubmit, uploadChange, galeria, deleteImage, setPosterImage} = useContext(myAdminContext)

    const {id} = useParams()
    const [ editing, setEditing] = useState('')
    const [ booleanEdit, setBooleanEdit] = useState(false)
    const [textEdit, setTextEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')

    const getFDetalleFilter = (data) => {
        return data.filter((field => field.id === id))
    }
    const getClassPencil = (info) => {
        if (info === editing && booleanEdit) {
            return true
        } else {
            return false
        }
    }
    const getDisabledPencil = (info) => {
        if (booleanEdit && info != editing) {
            return true
        } else {
            return false
        }
    }
    const showEdit = (nombre, id) => {
        setIdEdit(id)
        setEditing(nombre)
        setBooleanEdit(!booleanEdit)
        setTextEdit(nombre)
    }
    const handleChange = (e) => {
        setTextEdit(e.target.value)
    }
    const handleSubmitEdit = (e, dataText, propiedad) => {
        e.preventDefault()
        if (textEdit === dataText ) {
            console.log("son iguales")
            setBooleanEdit(!booleanEdit)
        } else {
        setBooleanEdit(!booleanEdit)
        editData(textEdit, idEdit, propiedad)
        }  
    }
    
    return ( 
        <div className="mt-5 py-5 px-4 w-100">
            {/* Box detalles */}
            <div className="p-3 py-4 text-dark fw-bold rounded box-detalles">
            <h3 className="fw-bold mb-3 text-white" >DETALLES</h3>
            {
                isResolve 
                ?
                <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                </p>
                : ''
            }
            {
            getFDetalleFilter(data).map((info, i)=> (
                <div key={i} className="d-flex gap-2 fw-bold flex-column">
                   {
                     [{nombre: 'nombre', contenido: info.nombre},
                      {nombre: 'tipo', contenido: info.tipo},
                      {nombre: 'marca', contenido: info.marca},
                      {nombre: 'referencia', contenido: info.referencia},
                      {nombre: 'sistemaoperativo', contenido: info.sistemaoperativo},
                      {nombre: 'precio', contenido: info.precio},
                      {nombre: 'garantia', contenido: info.garantia},
                      {nombre: 'color', contenido: info.color}
                     ].map((item, i) => (
                        <div key={i}>
                            <ItemDetalles 
                            nombre={item.nombre} 
                            infoDato={item.contenido}
                            id={info.id}
                            showEdit={showEdit}
                            getDisabledPencil={getDisabledPencil}
                            getClassPencil={getClassPencil}
                            handleSubmitEdit={handleSubmitEdit}
                            handleChange={handleChange}
                            textEdit={textEdit}
                            />
                        </div>
                      ))
                   }
                  
                </div>
            
            ))
            }

            {   
                uploading &&
                 <div className="w-100 mt-4 text-center" >
                 <span className="text-dark fw-bold h4 m-0" >Completado!</span>
                </div>
            }
            
            </div>
            
            <GaleriaDetalles 
            uploadSubmit={uploadSubmit} 
            uploadChange={uploadChange} 
            imageUploading={imageUploading}
            imageUploaded={imageUploaded}
            deleteImage={deleteImage}
            setPosterImage={setPosterImage}
            galeria={galeria}
            />

        </div>
     )
}
 
export default AdminProductoDetalles