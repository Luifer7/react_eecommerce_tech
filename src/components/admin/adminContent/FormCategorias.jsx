import { CSSTransition } from 'react-transition-group'
import {useRef, useState } from 'react'
import Spinner from '../../helpers/Spinner'

const FormCategorias = ({show, uploading, error, addData}) => {

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
    addData(nuevoDato)
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
       

              <div className="px-2 mb-2" >
                
                <label htmlFor="nombre">
                    <i><small>Nombre</small></i>
                </label>
              
              <input 
              id='nombre'
              type='text'
              placeholder='nombra' 
              name='nombre'
              className='form-control form-control-sm'
              onChange={handledChange}
              required
              />
              </div>
              
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
 
export default FormCategorias