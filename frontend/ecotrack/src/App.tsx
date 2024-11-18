import React from 'react';
import LoginComponent from './components/LoginComponent'
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <LoginComponent />
      
    </ThemeProvider>

  );
}

export default App;
