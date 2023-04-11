

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
    where,
    } from "firebase/firestore"

import { db } from "../../firebase"

export function useProfile (modulo, id) {

    const [ error, setError] = useState()
    const [ datos, setDatos] = useState()
    
    const addSale = async (venta, total) => {
        try {
        const docRef = await addDoc(collection(db, modulo),
        {
            compra: venta, fecha: Date.now(), total
        }
        )
        const docRefEdit = doc(db, modulo, docRef.id)
        await updateDoc(docRefEdit, { 
        id: docRef.id,
        userid: docRef?.firestore?._authCredentials.currentUser.uid
        })
        if (docRefEdit) {
       
        }
        } catch (error) {
            setError(error) 
        }
    }

    
    useEffect(() => { 
        const q = query(collection(db, modulo), orderBy("fecha", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
        data.push(doc.data())
        })

        setDatos(data.filter((field => field.userid == id)))
        })
        
    },[modulo])


    return {
        addSale, datos
    }
}