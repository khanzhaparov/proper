import React from 'react'

import './App.css';
import Main from './landing/Main';
import Socials from './landing/Socials';
import Footer from './landing/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


function App() {
  return (
    <>
        <CssBaseline />
        <Box 
          component="div"
        >
            <Main />
            <Socials />
            <Footer />
        </Box>
    </>
  );
}

export default App;