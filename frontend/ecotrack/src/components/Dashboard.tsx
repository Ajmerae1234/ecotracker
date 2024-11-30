import React from 'react';
import { 
    Box,
    AppBar,
    Toolbar,
    Typography,
    Drawer 
  } from '@mui/material';
const drawerWidth = 240;
const Dashboard = () => {
return (
<Box sx={{ display: 'flex' }}>
<AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#2196f3' // Customizable app bar color
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            top: 64, // Adjust based on AppBar height
            height: 'calc(100% - 64px)'
          },
        }}
      >

</Drawer>
</Box>
) 
}
export default Dashboard;