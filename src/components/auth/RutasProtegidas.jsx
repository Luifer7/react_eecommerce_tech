
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { myAuthContext } from "../../context/authContext"

const RutasProtegidas = ({children}) => {

    const { usuarioActual } = useContext(myAuthContext)

    if (!usuarioActual) {
        return <Navigate to="/" />
    }

    return children
}

export default RutasProtegidas
 
