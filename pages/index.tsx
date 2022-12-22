import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from '@mui/material';
import type { NextPage } from 'next';
import Navbar from '../components/organism/navbar';
import Banner from '../components/organism/banner';
import Hero from '../components/organism/hero';
import Head from 'next/head';
import Skills from '../components/skills';
import Project from '../components/organism/project';
import Footer from '../components/organism/footer';

const Home: NextPage = () => {
  const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#F2F609',
      },
    },
  });
  return (
    <>
      <CssBaseline />
      <Head>
        <title>rioaldie</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/image/rio.png"></link>
      </Head>
      <ThemeProvider theme={DarkTheme}>
        <Box bgcolor={'background.default'} color={'white'}>
          <Navbar />
          <Stack
            justifyContent="space-between"
            spacing={1}
            p={4}
            flexWrap={'wrap'}
            sx={{
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
              },
            }}>
            <Banner />
            <Hero />
          </Stack>
          <Stack justifyContent={'center'} alignItems={'center'}>
            <Skills />
          </Stack>
          <Stack justifyContent={'center'} alignItems={'center'}>
            <Project />
          </Stack>
          <Stack>
            <Footer />
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
