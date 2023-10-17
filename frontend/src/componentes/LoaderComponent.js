import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export const LoaderComponent = () => {
   

  return (
    
      
      <Backdrop
        sx={{ color: 'red', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
     
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    
  );
}