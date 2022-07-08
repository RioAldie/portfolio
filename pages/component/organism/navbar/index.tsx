import { AppBar, Avatar, Box, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import React from 'react';
import MobileBar from './mobilebar';

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                      <a href="#profile">
                        <ListItemText primary={'Profile'} />
                      </a>
                      
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <a href="#skills">
                        <ListItemText primary={'Skills'} />
                      </a>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <a href="#project">
                        <ListItemText primary={'Project'} />
                      </a>
                    </ListItemButton>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                      <ListItemText primary={'Contact'} />
                    </ListItemButton>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      
                    >
                      <MenuItem onClick={handleClose}>
                        <Link href={'mailto:rioaldierwanto@email.com'}>
                          <Typography>
                            Email
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                            <Link  href={'https://wa.me/+62895702695858'} >
                                <a target="_blank" rel="noopener noreferrer">
                                  <Typography>
                                    Whatsapp
                                  </Typography>
                                </a>
                            </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                            <Link  href={'https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/'} >
                                <a target="_blank" rel="noopener noreferrer">
                                  <Typography>
                                    Linkedin
                                  </Typography>
                                </a>
                            </Link>
                      </MenuItem>
                    </Menu>
                  </ListItem>
                  <ListItem  disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <Link  href={'https://github.com/RioAldie'} >
                              <a target="_blank" rel="noopener noreferrer">
                                  <ListItemText primary={'Github'} />      
                              </a>
                        </Link>
                    </ListItemButton>
                  </ListItem>
              </List>
              
                <MobileBar/>
              </Box>
              
            </Toolbar>
          </AppBar>
        </Box>
    )
}