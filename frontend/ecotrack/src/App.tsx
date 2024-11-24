import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  return (
   <Router>
    <ThemeProvider theme={createTheme()}>
        <Routes>
<Route path="/" element={<LoginComponent />} />  
       <Route path="/register" element={<RegisterComponent />} />
</Routes>
     
     
    </ThemeProvider>  
    </Router>

  );
}

export default App;