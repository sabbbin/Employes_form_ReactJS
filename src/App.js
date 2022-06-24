import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';

import React from 'react';
import './App.css';
import Header from './component/Header';
import PaperHeader from './component/PaperHeader';
import Sidemenu from './component/sidemenu';
import Employees from './pages/employees';



const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#333996',
      light:'#FF0000'
    },
    background:{
      default:'#f4f5fd'
    }
  },
  overrides:{
    MuiAppBar:{
    root:
      {
        transform:'translateZ(0)'
      }

    }
  }
  ,
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
});

const useStyle=makeStyles({
  appmain:{
    width:'100%',
    paddingLeft:240
  }

});

function App() {
const classes= useStyle();
  
  return (
    <ThemeProvider theme={theme}>

   
    <div className="App">
      <CssBaseline />
    <Sidemenu />
    <div className={classes.appmain}>
    <Header />
    

 <Employees />
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
