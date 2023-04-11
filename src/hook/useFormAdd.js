
import { useEffect, useState } from "react"
import { 
    addDoc, 
    collection, 
    doc, 
    query, 
    updateDoc, 
    deleteDoc,
    onSnapshot,
    orderBy,
    } from "firebase/firestore"

import { db } from "../../firebase"

export function useFormAdd (modulo) {
    
    const [data, setData] = useState([])
    const [ isResolve, setIsResolve] = useState(true)
    const [ categorias, setCategorias] = useState([])
    const [ dowloading, setDowloading] = useState(true)
    const [show, setShow] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [ error, setError] = useState()
    
    const showForm = () => {
        setShow(!show)
    }
    
    const addData = async (newData) => {
        setUploading(true)
        try {
        const docRef = await addDoc(collection(db, modulo),
        newData
        )
        const docRefEdit = doc(db, modulo, docRef.id)
        await updateDoc(docRefEdit, { 
        id: docRef.id,
        userid: docRef?.firestore?._authCredentials.currentUser.uid
        })
        if (docRefEdit) {
            setUploading(false)
            observerData()
        }
        } catch (error) {
            setError(error)
        }
        
    }

    const observerData = () => {
        const q = query(collection(db, modulo), orderBy("date", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const datos = []
          querySnapshot.forEach((doc) => {
              datos.push(doc.data())
          })
          setData(datos)
        })
    }

    const editData = async (editedData, id, propiedad) => {
        try {
        setUploading(true)
        const docRef = doc(db, modulo, id)
        await updateDoc(docRef, {
        [`${propiedad}`]: editedData,
        lastEdited: Date.now()
        })
        if (docRef) {
        function stopUp(){
        setUploading(false)
        }
        setTimeout(stopUp, 1000)
        }
        } catch (error) {
            console.log(error)
        }
         
    }

    const deleteData = async (id) => {
       await deleteDoc(doc(db, modulo, id));
    }

    useEffect(() => { 
        const getData = () => {
        if (modulo === 'productos') {
        const qc = query(collection(db, "categorias"), orderBy("date", "desc"))
        const unsubscribeqc = onSnapshot(qc, (querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
        data.push(doc.data())
        })
        setCategorias(data)
       })
        }
        
        const q = query(collection(db, modulo), orderBy("date", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const datos = []
        querySnapshot.forEach((doc) => {
        datos.push(doc.data())
        })
    
        setIsResolve(false)
        setDowloading(false)
        setData(datos)
        })
        }

        getData()

    },[modulo])

    return {
        show, uploading, error, data, categorias, dowloading, isResolve,
        showForm, addData, editData, deleteData
    }
}