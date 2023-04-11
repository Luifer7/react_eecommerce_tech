import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header"

const SearchView = () => {

    const {query} = useParams()

    return ( 
        <Fragment>
            <Header/>
        <div className="py-2 m-4 d-flex align-items-center justify-content-start w-100" >
            <h3 className="fw-bold text-uppercase " >Busqueda: <i className="text-muted" >{query}</i></h3>
        </div>
        </Fragment>
     )
}
 
export default SearchView;