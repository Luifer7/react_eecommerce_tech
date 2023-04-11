
import Spinner from "../../helpers/Spinner";
import { useState } from "react"
import { useMyPagination } from "../../../hook/useMyPagination";
import BodyTableCategorias from "./BodyTableCategorias";
import HeadTableCategorias from "./HeadTableCategorias";
import HeadTableProductos from "./HeadTableProductos";
import BodyTableProductos from "./BodyTableProductos";

const TableContent = ({data, dowloading, editData, deleteData, modulo}) => {

    const [porPage, setPorPage] = useState(4)

    // custom hook para crear paginacion de una tabla
    //Recive la data en forma de arreglo e igtems por page un numero
    const { rango, actual, paginationData, add, rest, numeroPaginas } = useMyPagination(data, porPage)

    const handleChange = (e) => {
    let n = parseInt(e.target.value)
    setPorPage(n)
    } 

    return ( 
        <div className="w-100 p-4 tabla-categorias" >
            
            {/** Paginacion */}
            <div className="my-2" >
            <label> <small> <i>Items por página</i></small> </label>
            <select 
            className="form-select form-select-sm"
            style={{width: '150px'}} 
            aria-label=".form-select-sm example"
            onChange={handleChange}
            >
            <option value={4}>5</option>
            <option value={9}>10</option>
            </select>
            </div>
    
            <table className="table table-sm table-bordered">

                {   modulo === 'categorias' &&
                     <HeadTableCategorias/>
                }
                {
                    modulo === 'productos' &&
                    <HeadTableProductos/>
                }
               
                {   modulo === 'categorias' && 
                    <BodyTableCategorias
                    paginationData={paginationData}
                    editData={editData} 
                    deleteData={deleteData} 
                    />
                }
                {
                    modulo === 'productos' &&
                    <BodyTableProductos
                    paginationData={paginationData}
                    editData={editData} 
                    deleteData={deleteData}
                    />
                }
                 
            </table>

            {
            dowloading &&
            <div className="w-100 text-center m-2" >
            <Spinner/>
            </div>
            }
            
            {
            !data[0] && !dowloading &&
            <div className="text-center p-2 m-2" >
            <small className="fw-bold text-muted" ><i>Aún no tienes datos!</i></small>
            </div>
            }

            {/**Paginacion */}
            <nav  className="" >
            <ul className="pagination pagination-sm">

                <li className="page-item">
                <button onClick={()=> rest(rango + 1)} 
                className={`page-link ${actual >= 2 ? '': 'disabled'}`}
                >
                <i className="bi bi-arrow-left-circle-fill"></i>
                </button>
                </li>

                <li className="page-item" aria-current="page">
                <span className="page-link active fw-bold" 
                style={{letterSpacing: '2px'}}
                >{actual}/{numeroPaginas()}</span>
                </li>
                <li className="page-item">
                
                <button onClick={()=> add(rango + 1)} 
                className={`page-link ${actual >= numeroPaginas() ?'disabled':''}`}>
                   <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
                </li>
           
            </ul>
            </nav>

           
        
        </div>
     )
}
 
export default TableContent;