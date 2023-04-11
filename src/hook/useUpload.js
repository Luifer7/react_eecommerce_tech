
import { addDoc, deleteDoc, collection, doc, updateDoc, query, where, getDocs, orderBy, onSnapshot  } from "firebase/firestore"
import { deleteObject, getStorage, ref, uploadBytes } from "firebase/storage"
import { useEffect, useState } from "react"
import { db } from "../../firebase"


export function useUpload (idProducto) {
    
    const storage = getStorage()

    const [ filePath, setFilePath] = useState()
    const [ imageUploading, setImageUploading] = useState(false)
    const [ imageUploaded, setImageUploaded] = useState(false)
    const [ galeria, setGaleria] = useState([])
    
    const uploadChange = (fileContent) => {
        if (fileContent.size < 2097152) {
            if (fileContent.type === 'image/jpeg' || fileContent.type === 'image/png' ) {
                setFilePath(fileContent)       
            } 
            else {
            alert('Solo puedes subir archivos .PNG o .JPG')
            }
        } else {
            alert('el archivo es muy grande, prueba con uno menor a 2 MG')
        }
    }

    const uploadSubmit = (id) => {
        if (filePath) {
            setImageUploading(true)
            const storageRef = ref(storage, filePath.name)
            uploadBytes(storageRef, filePath).then((snapshot) => {
            setImageUploading(false)
            setImageUploaded(true)
            setFilePath(null)
            validImagen(filePath.name, id)
            })   
            } else {
                alert('no puedes enviar un input vacio')
            }
    }

    const validImagen = async (imagenData, id) => {
        const q = query(collection(db, "imagenes"), where("imagen", "==", imagenData));
        const querySnapshot = await getDocs(q)
        if (!querySnapshot.empty) {
            console.log('ya has subido esta imagen')
            setImageUploaded(false)
        } else {
            addImagenData(imagenData, id)
            console.log("no existia ya la has subido!")
        }
       
    }

    const addImagenData = async (imagenData, id) => {
        try {
        const docRef = await addDoc(collection(db, 'imagenes'),
        {imagen: imagenData, idProducto: id, date: Date.now(), lastEdit: Date.now()}
        )
        const docRefEdit = doc(db, 'imagenes', docRef.id)
        await updateDoc(docRefEdit, { 
        id: docRef.id,
        userid: docRef?.firestore?._authCredentials.currentUser.uid
        })
        function clear(){
            setImageUploaded(false)
            observerData(idProducto)
        } 
        setTimeout(clear, 1500)
        } catch (error) {
        console.log(error)
        }
    }

    const observerData = (idProducto) => {
        const q = query(collection(db, 'imagenes'), orderBy("lastEdit", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const datos = []
          querySnapshot.forEach((doc) => {
              datos.push(doc.data())
          })
          setGaleria(datos.filter((field => field.idProducto === idProducto)))
        })
    }

    const deleteImage = async (refName, refId) => {
       const desertRef = ref(storage, refName)
       deleteObject(desertRef).then(() => {
           
         }).catch((error) => {
           console.log(error)
         })
         await deleteDoc(doc(db, "imagenes", refId))
    }

    const setPosterImage = async (id, documentId, nombreImagen) => {
        const docRefEdit = doc(db, 'imagenes', id)
        await updateDoc(docRefEdit, { 
        lastEdit: Date.now()
        })
        const docRefData = doc(db, 'productos', documentId)
        await updateDoc(docRefData, { 
        imagen: nombreImagen
        })
        
    }
    

    useEffect(() => {
        observerData(idProducto)
    },[idProducto])

    return {
        filePath, imageUploading, imageUploaded, galeria, uploadSubmit, uploadChange, deleteImage, setPosterImage
    }
}