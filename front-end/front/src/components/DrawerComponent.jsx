import React from 'react'
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Button} from '@mui/material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import FactoryIcon from '@mui/icons-material/Factory';
import { useState } from 'react';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';


const DrawerComponent = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}> 
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                    <Button variant="contained" size="large" sx={{backgroundColor: 'orange'}}>
                    <Link style={{ textDecoration: 'none', color: 'black', }}to="/login">Kirjaudu</Link>
                    </Button>
                    <br/>
                    <br/>
                    <Button>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/view/emissionsources"><FactoryIcon sx={{color: 'orange'}}/></Link>
                    </Button>
                    <br/>
                    <br/>
                    <Button className="nav-item dropdown">
                    <Link className="w-100"  style={{textDecoration: 'none', color: 'white'}} to="/view/temperaturedata"><OutdoorGrillIcon sx={{color: 'orange'}}/></Link>
                    </Button>
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List>
        </Drawer>

        <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon/>
        </IconButton>
    </>
  );
}

export default DrawerComponent