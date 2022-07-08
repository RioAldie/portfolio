import { Box, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import Link from "next/link";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

export default function MobileBar(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [dropdown, setDropdown] = useState<boolean>();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <>
             <Box  sx={{display:{sm: 'block', md:'none'}}}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                
                  <MenuIcon />
                </IconButton>
               
              </Box>
              <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      sx={{width:'100%'}}
                    >
                      <MenuItem>
                            <List>
                                <ListItemButton onClick={handleClose}>
                                    <a href="#profile">
                                        <ListItemText primary={'Profile'} />
                                    </a>
                                </ListItemButton>
                                <ListItemButton onClick={handleClose}>
                                    <a href="#skills">
                                        <ListItemText primary={'Skills'} />
                                    </a>
                                </ListItemButton>
                                <ListItemButton onClick={handleClose}>
                                    <a href="#project">
                                        <ListItemText primary={'Project'} />
                                    </a>
                                </ListItemButton>
                                <ListItemButton onClick={(e) => setDropdown(!dropdown)}>
                                    <ListItemText primary={'Contact'} />
                                    {dropdown ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={dropdown} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <Link href={'mailto:rioaldierwanto@email.com'}>
                                            <Typography>
                                            Email
                                            </Typography>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <Link  href={'https://wa.me/+62895702695858'} >
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Typography>
                                                    Whatsapp
                                                </Typography>
                                            </a>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <Link  href={'https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/'} >
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Typography>
                                                    Linkedin
                                                </Typography>
                                            </a>
                                        </Link>
                                    </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClose}>
                                        <Link  href={'https://github.com/RioAldie'} >
                                            <a target="_blank" rel="noopener noreferrer">
                                                <ListItemText primary={'Github'} />      
                                            </a>
                                        </Link>
                                </ListItemButton>
                            </List>
                    </MenuItem>
                </Menu>
        </>
    )
}