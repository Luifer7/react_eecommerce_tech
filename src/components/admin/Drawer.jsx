import {Fragment, useState} from 'react'
import Drawer from '@mui/material/Drawer';
import { ToggleButton } from '@mui/material';
import AdminSidebar from './SideBar';

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <ToggleButton  
          onClick={toggleDrawer(anchor, true)} 
          value="list"
          aria-label="list">
          <i className="h4 bi bi-list m-0 text-white"></i>
          </ToggleButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >

          <AdminSidebar/>
          
          </Drawer>
        </Fragment>
      ))}
    </div>
  )
}