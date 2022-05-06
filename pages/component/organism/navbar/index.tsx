import { AppBar, Avatar, Box, CssBaseline, IconButton, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import type { NextPage } from 'next';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const LogoStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: 150,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: 2
})
export default function Navbar(){
    return(
        <Box>
        <AppBar position="static">
            <Toolbar>
              <LogoStyled>
                <Avatar alt="Travis Howard" src="/image/rio.png" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} marginLeft={1} fontFamily={'Roboto'}>
                  Rioaldie
                </Typography>
              </LogoStyled>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  
                </Typography>
              
           
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
    )
}