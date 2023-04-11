import { useEffect, useState } from "react"
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export function useHome() {
        
    const [categorias, setCategorias] = useState([])
    const [productos, setProductos] = useState([])
    const marcas = [
        'https://www.compulago.net/wp-content/uploads/2020/12/logitech-1.png', 
        'https://www.compulago.net/wp-content/uploads/2020/12/dell-1.png', 
        'https://www.compulago.net/wp-content/uploads/2020/12/samsun.png',
        'https://www.compulago.net/wp-content/uploads/2020/12/lenovo-1.png',
        'https://www.compulago.net/wp-content/uploads/2020/12/asus-b.png'
    ]
 
     useEffect(() => {
         const qc = query(collection(db, "categorias"), orderBy("date", "desc"))
         const unsubscribeqc = onSnapshot(qc, (querySnapshot) => {
         const data = []
         querySnapshot.forEach((doc) => {
         data.push(doc.data())
         })
         setCategorias(data)
         })
         
         const q = query(collection(db, "productos"), orderBy("date", "desc"))
         const unsubscribe = onSnapshot(q, (querySnapshot) => {
         const dataP = []
         querySnapshot.forEach((doc) => {
         dataP.push(doc.data())
         })
         setProductos(dataP)
         })
 
     },[])
 
 


    return {
        categorias, productos, marcas
    }
}