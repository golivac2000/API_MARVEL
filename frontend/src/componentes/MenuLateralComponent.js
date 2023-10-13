    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Drawer from '@mui/material/Drawer';
    import Button from '@mui/material/Button';
    import List from '@mui/material/List';
    import Divider from '@mui/material/Divider';
    import ListItem from '@mui/material/ListItem';
    import ListItemButton from '@mui/material/ListItemButton';
    import ListItemIcon from '@mui/material/ListItemIcon';
    import ListItemText from '@mui/material/ListItemText';
    import InboxIcon from '@mui/icons-material/MoveToInbox';
    import MailIcon from '@mui/icons-material/Mail';
    import { Link } from '@mui/material'
    import {Link as RouterLink} from 'react-router-dom'





    export const MenuLateralComponent = ({toggleDrawer, state}) => {
    
        
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >




          <List>

                <Link component={RouterLink} to='/' underline='none' color='secondary'>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                     <InboxIcon />
                  </ListItemIcon>
                  <ListItemText   >
                    Inicio
                     </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link> 
              

              <Link component={RouterLink} to='/api/heroes' underline='none' color='secondary'>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                     <InboxIcon />
                  </ListItemIcon>
                  <ListItemText   >
                    Lista de personajes
                     </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link> 


              <Link component={RouterLink} to='/about' underline='none' color='secondary'>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                     <InboxIcon />
                  </ListItemIcon>
                  <ListItemText   >
                    Acerca de 
                     </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link> 


         
        



          </List>
          





          <Divider />
         
        </Box>
      );
    
      return (
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
           
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      );
    }