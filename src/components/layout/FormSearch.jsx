import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormSearch = () => {

    const query = useRef()
    const navigater = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(query.current)
        navigater(`/search/product/${query.current}`)
    }

    const handleChange = (e) => {
        query.current = e.target.value
    }

    return(
    
         <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
          size='small'
          onSubmit={handleSubmit}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
            
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'Buscar' }}
                size='small'
                name="query"
                onChange={handleChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
           
        </Paper>         
    )
}

export default FormSearch;