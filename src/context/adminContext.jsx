import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useFormAdd } from "../hook/useFormAdd";
import { useUpload } from "../hook/useUpload";


export const myAdminContext = createContext();

const AdminContext = (props) => {

    const {modulo, id} = useParams()

    const {
    show, 
    data,
    isResolve,
    categorias,
    uploading, 
    dowloading, 
    error, 
    showForm, 
    addData, 
    editData, 
    deleteData
    } = useFormAdd(modulo, id)

    const {
    filePath, imageUploading, imageUploaded, galeria, 
    uploadSubmit, uploadChange, deleteImage, setPosterImage
    } = useUpload(id)
  
    return ( 
        <myAdminContext.Provider
            value={{
              show, uploading, error, data, categorias, dowloading, modulo, isResolve, 
              filePath, imageUploading, imageUploaded, galeria,
              showForm, addData, editData, deleteData, uploadChange, uploadSubmit, deleteImage, setPosterImage
            }}
        >

            {props.children}
        </myAdminContext.Provider>
     )
}
 
export default AdminContext;