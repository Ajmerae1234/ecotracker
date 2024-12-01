import React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
  } from '@mui/material';
  import {
    Home as HomeIcon,
    DevicesOther as DevicesIcon
  } from '@mui/icons-material';
  import Device from './Device'
const drawerWidth = 240;
const Dashboard = () => {
    const [selectedMenu, setSelectedMenu] = React.useState('home');
     const handleMenuItemClick = (item: any) => {
    setSelectedMenu(item);
  };
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
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem
              component={"button"}
     
              onClick={() => handleMenuItemClick('home')}
             
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
           
            <ListItem
              component={"button"}
              
              onClick={() => handleMenuItemClick('devices')}
             
             
            >
              <ListItemIcon>
                <DevicesIcon />
              </ListItemIcon>
              <ListItemText primary="Devices" />
            </ListItem>
          </List>
        </Box>

</Drawer>
<Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          marginLeft: `${drawerWidth}px`
        }}
      >
{selectedMenu === 'home' && (
          <Typography paragraph>
            Home Content
          </Typography>
        )}
        {selectedMenu === 'devices' && (
          <Typography paragraph>
            Devices Content
          </Typography>
        )}
</Box>
</Box>
)
}
export default Dashboard;
