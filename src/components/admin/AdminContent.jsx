import { useContext } from "react"
import { myAdminContext } from "../../context/adminContext"
import FormCategorias from "./AdminContent/FormCategorias"
import FormProductos from "./AdminContent/FormProductos";
import TableContent from "./AdminContent/TableContent";

const AdminContent = () => {

    const {
    show, 
    uploading, 
    data,
    categorias,
    error, 
    dowloading, 
    showForm, 
    addData,
    editData, 
    deleteData,
    modulo,
    } = useContext(myAdminContext)

    return ( 
        <div className="d-flex align-items-center flex-column justify-content-cente py-4" >

            <div className="w-100 px-4">
           <button className="button-30 mt-5"
           onClick={() => showForm()}
           > 
           <i className="bi bi-plus-square h4 mt-2"></i>
           <strong className="text-capitalize m-0 h3 fw-bold mx-2 mb-1" >{modulo}</strong>
           </button>
            </div>

            {
            show && modulo === 'categorias' &&
            <FormCategorias 
            show={show} addData={addData} 
            uploading={uploading} error={error} 
            />
            }

            {
            show && modulo === 'productos' &&
            <FormProductos
            show={show} categorias={categorias}
            addData={addData} uploading={uploading} error={error} 
            />
            }

            <TableContent 
            editData={editData} 
            data={data} 
            dowloading={dowloading} 
            deleteData={deleteData}
            modulo={modulo}
            />
          
        </div>
     )
}
 
export default AdminContent