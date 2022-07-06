import { AppBar, Avatar, Box, createTheme, CssBaseline, IconButton, Menu, MenuItem, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material';
import type { NextPage } from 'next';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Navbar from './component/organism/navbar';
import Banner from './component/organism/banner';
import Hero from './component/organism/hero';
import Head from 'next/head';
import Skills from './component/skills';
import Project from './component/organism/project';
import Skill from './component/organism/skill';
import Footer from './component/organism/footer';

const Home: NextPage = () => {

    const DarkTheme = createTheme({
      palette:{
        mode: 'dark',
      },
   
  }) 
  return (
    <>
    <CssBaseline/>
    <Head>
      <title>rioaldie</title>
    </Head>
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={'background.default'} color={'white'}>
         <Navbar/>
        <Stack justifyContent="space-between" spacing={1} p={4} flexWrap={'wrap'} sx={{flexDirection:{ xs: 'column', sm: 'column', md: 'row'}}}>
        <Banner />
        <Hero />
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <Skill/>
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <Project/>
        </Stack>
        <Stack>
          <Footer/>
        </Stack>
      </Box>
   
    </ThemeProvider>
    </>
  )
}

export default Home
