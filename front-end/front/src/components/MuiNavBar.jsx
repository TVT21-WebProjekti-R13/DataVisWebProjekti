import * as React from 'react';
import Styles from "./Styles.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FactoryIcon from '@mui/icons-material/Factory';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { Drawer, useTheme, useMediaQuery} from '@mui/material';
import DrawerComponent from './DrawerComponent';

export default function ButtonAppBar() {

  const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);


  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" id="navcolor">
        <Toolbar>
          
            <Button className="nav-item dropdown">
                <Link className="nav-item" to="/"><HomeIcon sx={{color: 'orange'}}/></Link>
            </Button>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Visualisointityökalu
          </Typography>
          {isMatch ? <></> : <Button>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/view/emissionsources">Lämpötilatiedot ja C02 pitoisuudet</Link>
          </Button>}
        
      <br/>
      <br/>
      <br/>
    
          {isMatch ? <></> : <Button className="nav-item dropdown">
          <Link className="w-100"  style={{textDecoration: 'none', color: 'white'}} to="/view/temperaturedata">Päästölähteet</Link>
          </Button>}
      <br/>
      <br/>
      <br/>
          {isMatch ? <></> : <Button variant="contained" size="large" sx={{backgroundColor: 'orange'}}>
          <Link style={{ textDecoration: 'none', color: 'black', }}to="/login">Kirjaudu</Link>
          </Button>}
          <DrawerComponent/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}