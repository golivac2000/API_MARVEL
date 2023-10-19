import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Tooltip from '@mui/material/Tooltip';

import FactCheckIcon from '@mui/icons-material/FactCheck';

import LightModeIcon from '@mui/icons-material/LightMode';

import { Link } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reducerMuiTema } from '../redux/slices/muiSlice';
import { temaDark, temaLight } from '../mui/temas';
 




export const NavbarComponent = ({ toggleDrawer }) => {

    const dispatch = useDispatch()
    const {colorTema}= useSelector(state=>state.muiReducerState)

   
    const cambiarColorTema=()=>{
        colorTema.mode === 'light' ? dispatch (reducerMuiTema(temaDark)):   dispatch (reducerMuiTema(temaLight))
    }



    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <FactCheckIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MARVEL APP
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer('left', true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <FactCheckIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MARVEL APP
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link sx={{ my: 2, mx: 2, color: 'white', display: 'block' }} component={RouterLink} to='/' underline='none' >Inicio</Link>
                            <Link sx={{ my: 2, mx: 2, color: 'white', display: 'block' }} component={RouterLink} to='/api/heroes' underline='none' >Lista de heroes</Link>
                            <Link sx={{ my: 2, mx: 2, color: 'white', display: 'block' }} component={RouterLink} to='/about' underline='none' >Acerca de</Link>
                        </Box>


                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Cambiar tema">
                                <IconButton sx={{ p: 0, color: 'white' }} onClick={cambiarColorTema}>
                                    <LightModeIcon />
                                </IconButton>
                            </Tooltip>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
