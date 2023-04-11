import { CSSTransition } from 'react-transition-group'
import {useRef, useState } from 'react'
import Spinner from '../../helpers/Spinner'
import lista from '../../helpers/listas'

const FormProductos = ({show, uploading, error, addData, categorias}) => {

const nodeRef = useRef(null)

const [ nuevoDato, setNuevoDato ] = useState({})

const handledChange = e => {
    setNuevoDato({ 
        ...nuevoDato, [e.target.name] : e.target.value
    })
}

const handledSubmit = (e) => {
    e.preventDefault()
    nuevoDato.date = Date.now()
    if (!nuevoDato.categoria || nuevoDato.categoria === '') {
        console.log("Debes agregar una catgeoria")
    } if (!nuevoDato.lista || nuevoDato.lista === '') {
        console.log("Debes agregar una lista")
    } else {
        console.log("se guardó")
        addData(nuevoDato)
    } 
   
}

return ( 
    
    <CSSTransition  
    nodeRef={nodeRef} 
    in={show} exit={show} 
    unmountOnExit 
    timeout={600} 
    classNames="my-node">

    <div className="w-100 p-1 mt-2" ref={nodeRef} >
     
        <form onSubmit={handledSubmit} className="py-2 px-2" >

            <div className="px-2 mb-2 d-flex row" >

            <div className='col-12' >
            <label htmlFor="categoria">
            <i><small className='text-dark fw-bold' >categoria</small></i>
            </label>
              
            <select 
            name='categoria'
            onChange={handledChange}
            className="form-select form-select-sm" 
            aria-label=".form-select-sm example">
            <option value="" >Escoge una categoria</option>
                {
                    categorias.map((categoria, i) => (
                        <option key={i} value={categoria.id}>{categoria.nombre}</option>
                    ))
                }
            </select>
                
            <select 
            name='lista'
            onChange={handledChange}
            className="form-select form-select-sm mt-2" 
            aria-label=".form-select-sm example">
            <option value="" >Escoge una lista</option>
            {
                    lista.map((item, i) => (
                        <option key={i} value={item.id}>{item.nombre}</option>
                    ))
                }
            
            </select>

            </div>   
 
            </div> 
       
            <div className="px-2 mb-2 d-flex row" >

            <div className='col-12 col-sm-6' >
            <label htmlFor="nombre">
            <i><small className='text-dark fw-bold' >Nombre</small></i>
            </label>
              
            <input 
            id='nombre'
            type='text'
            placeholder='nombra tu producto' 
            name='nombre'
            className='form-control form-control-sm'
            onChange={handledChange}
            required
            />
            </div>   

            <div className='col-12 col-sm-6' >
            <label htmlFor="nombre">
            <i><small className='text-dark fw-bold' >Precio</small></i>
            </label>
              
            <input 
            id='precio'
            type='number'
            placeholder='precio del producto' 
            name='precio'
            className='form-control form-control-sm'
            required
            onChange={handledChange}
            />
            </div>    
            
            </div>

            <div className="px-2 mb-2 d-flex row" >

            <div className='col-12 col-sm-4' >
            <label htmlFor="nombre">
            <i><small className='text-dark fw-bold' >Marca</small></i>
            </label>
              
            <input 
            id='marca'
            type='text'
            placeholder='marca' 
            name='marca'
            className='form-control form-control-sm'
            onChange={handledChange}
            required
            />
            </div>     
           
            <div className='col-12 col-sm-4' >
            <label htmlFor="nombre">
            <i><small className='text-dark fw-bold' >Tipo</small></i>
            </label>
              
            <input 
            id='tipo'
            type='text'
            placeholder='tipo' 
            name='tipo'
            className='form-control form-control-sm'
            onChange={handledChange}
            required
            />
            </div>  

             <div className='col-12 col-sm-4' >
            <label htmlFor="nombre">
            <i><small className='text-dark fw-bold' >Referencia</small></i>
            </label>
              
            <input 
            id='referencia'
            type='text'
            placeholder='referencia' 
            name='referencia'
            className='form-control form-control-sm'
            onChange={handledChange}
            required
            />
            </div>    

            </div>

            <div className="px-2 mb-2 d-flex row" >

                <div className='col-12 col-sm-4' >
                <label htmlFor="nombre">
                <i><small className='text-dark fw-bold' >Sistema operativo</small></i>
                </label>
                
                <input 
                id='sistemaoperativo'
                type='text'
                placeholder='sistema operativo' 
                name='sistemaoperativo'
                className='form-control form-control-sm'
                onChange={handledChange}
                required
                />
                </div>     

                <div className='col-12 col-sm-4' >
                <label htmlFor="nombre">
                <i><small className='text-dark fw-bold' >Color</small></i>
                </label>
                
                <input 
                id='color'
                type='text'
                placeholder='marca' 
                name='color'
                className='form-control form-control-sm'
                onChange={handledChange}
                required
                />
                </div>  

                <div className='col-12 col-sm-4' >
                <label htmlFor="nombre">
                <i><small className='text-dark fw-bold' >Garantia</small></i>
                </label>
                
                <input 
                id='garantia'
                type='text'
                placeholder='garantia' 
                name='garantia'
                className='form-control form-control-sm'
                onChange={handledChange}
                required
                />
                </div>    

            </div>
            
            {/**BUTTON */}
            <div className='w-100 px-2 mt-3' >

            <button className='button-30'
            disabled={uploading}
            >
                Agregar
            {
                uploading ? <Spinner/> : ''
            }
            
            </button>
            </div>

        </form>
   

    </div>

    </CSSTransition>
     )
}
 
export default FormProductos