import { AppBar, Avatar, Box, createTheme, CssBaseline, IconButton, Menu, MenuItem, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material';
import type { NextPage } from 'next';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Navbar from './component/organism/navbar';
import Banner from './component/organism/banner';
import Hero from './component/organism/hero';

const Home: NextPage = () => {

    const DarkTheme = createTheme({
      palette:{
        mode: 'dark',
      },
   
  }) 
  return (
    <>
    <CssBaseline/>
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={'background.default'} color={'white'}>
         <Navbar/>
        <Stack justifyContent="space-between" spacing={1} p={4} flexWrap={'wrap'} sx={{flexDirection:{ xs: 'column', sm: 'column', md: 'row'}}}>
        <Banner />
        <Hero />
        </Stack>
      </Box>
   
    </ThemeProvider>
    </>
  )
}

export default Home
