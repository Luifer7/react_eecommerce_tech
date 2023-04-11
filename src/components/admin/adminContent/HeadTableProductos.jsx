const HeadTableProductos = () => {
    return ( 
        <thead>
        <tr>
        
        <th scope="col"
        className="custom-td-fecha" 
         >
        <i className="bi bi-calendar-date h5" ></i>
         </th>
        
        <th>nombre</th>
        <th>tipo</th>
        
        <th>referencia</th>
        <th>precio</th>
        <th
        className="custom-td-acciones"
        >acciones
        </th>
        
        </tr>
        </thead>
     )
}
 
export default HeadTableProductos;