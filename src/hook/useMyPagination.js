import { useEffect, useState } from "react"

export function useMyPagination (data, porPage) {

    const [rangoVariante, setRangoVariante] = useState(porPage)
    const [ rango, setRango ] = useState(porPage)
    const [actual, setActual] = useState(1)
    const [uno, setUno] = useState(0)
    const [ dos, setDos] = useState(rangoVariante)

    const numeroPaginas = () => {
        let paginas = data.length / (rango + 1)
        let numerador = Math.floor(paginas) + .1
        if (numerador <= paginas) {
            return Math.floor(paginas+1)
        } else {
            return Math.floor(paginas)
        }
    }

    const paginationData = () => {
        let filterData = data.filter((field, i) => i >= uno && i <= dos )
        return filterData
    }

    const add = (n) => {
        setActual(actual+1)
        let current = actual+1
        setUno(current * n - n)
        setDos(current * n - n + n -1)
    }
    
    const rest = (n) => {
        setActual(actual-1)
        let current = actual-1
        setUno(current * n - n)
        setDos(current * n - n + n -1)
    }

    useEffect(() => {
       if (porPage === 9) {
          setUno(0)
          setDos(9)
       }
       if (porPage === 4) {
        setUno(0)
        setDos(4)
     }
        setActual(1)
        setRango(porPage)
    },[porPage])


    return {
        rango, actual, rangoVariante,
        paginationData, add, rest, numeroPaginas
    }

}