const Spinner = () => {
    return ( 
        <div className="w-100 p-5 d-flex align-items-center justify-content-center" >
            <div className="spinner-border m-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
     )
}
 
export default Spinner;