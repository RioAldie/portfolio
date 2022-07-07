import { AppBar, Avatar, Box, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
        <AppBar position="fixed">
            <Toolbar>
              <LogoStyled>
                <Avatar alt="Travis Howard" src="/image/rio.png" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} marginLeft={1} fontFamily={'Roboto'}>
                  Rioaldie
                </Typography>
              </LogoStyled>
              
          
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

              </Typography>
            
              <Box sx={{display:'flex', flexDirection:'row',alignItems:'center'}}>
              <List sx={{display:{xs:'none',sm: 'none', md:'flex'},flexDirection:'row',height:'40px'}}>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={'Profile'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={'Skill'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={'Project'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={'Contact'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={'Github'} />
                    </ListItemButton>
                  </ListItem>
              </List>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 ,display:{sm: 'block', md:'none'}}}
              >
                
                <MenuIcon />
              </IconButton>
              </Box>
              
            </Toolbar>
          </AppBar>
        </Box>
    )
}