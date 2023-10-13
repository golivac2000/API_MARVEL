import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { MenuLateralComponent } from './MenuLateralComponent'

export const LayoutComponent = () => {


  //ESTADO PARA EL MENU LATERAL
  const [state, setState] = React.useState({

    left: false,

   
  });
//FUNCIÓN PARA MODIFICAR EL ESTADO DEL MENU LATERAL
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <>
      <NavbarComponent toggleDrawer={toggleDrawer}/>
      <MenuLateralComponent toggleDrawer={toggleDrawer} state={state}/>

    </>
  )
}
