const SectionsLinks = ({content}) => {

    return ( 
        <div className='p-2 my-5 py-4 d-flex gap-3 w-100 sections-links' style={{overflow: 'auto'}}>
           
               { content.map((item, i) => (
                    <div style={{minWidth: '150px', cursor: 'pointer'}} 
                    className='m-auto d-flex align-items-center justify-content-center' 
                    key={i} 
                    
                    >
                        <img decoding="async" 
                        className="img"
                        style={{objectFit: 'contain'}}
                        width='120'
                        src={item} 
                        alt="icono comple"
                        loading="lazy"/>
                    </div>
                ))
                }

            </div>
     )
}
 
export default SectionsLinks;