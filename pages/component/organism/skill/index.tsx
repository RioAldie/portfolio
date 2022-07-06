import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";


function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
const BoxStyled = styled(Box)({
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column'
});
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
const MainSkill = styled('div')(({ theme}) =>({
    minWidth: 150,
    display: 'flex',
    flexDirection: 'row',
    height: 40
}))
const Skill = () =>{
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return(
        <>
        <BoxStyled flex={0.8} p={1} width={'80%'}>
                <Box  bgcolor={'background.default'}>
                    <Image src={"/icon/kuda.svg"} width={24} height={26}></Image>
                    <Typography variant="h4" fontFamily={'Roboto'} color={'#F2F609'}>My Skills</Typography>
                </Box>
                <Box display ='flex' flex={0.4} sx={{marginTop: 10, flexDirection: {xs: 'column', md:'row'}, justifyContent: {xs: 'center', md: 'center'}}}>

                <Grid container spacing={2} sx={{display: 'flex',minHeight: '400px',width: {sm:'100%',md: '60%'}, justifyContent: "space-around",flexWrap:'wrap'}}>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                        <Image src={"/image/html.png"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        HTML
                       </Typography> 
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                        <Image src={"/icon/css.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        CSS
                       </Typography> 
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                        <Image src={"/icon/mui.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        Material UI
                       </Typography> 
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                        <Image src={"/icon/sass.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        SASS
                       </Typography> 
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                        <Image src={"/image/js-logo.png"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        Javascript
                       </Typography> 
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                    <Image src={"/icon/reactjs.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        ReactJS
                       </Typography> 
                    </Box>
                
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                    <Image src={"/icon/mongodb.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        MongoDB
                       </Typography> 
                    </Box>
                    
                    
                
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                    <Image src={"/icon/next.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        NextJS
                       </Typography> 
                    </Box>
                    
                    

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',ml: 5}}>
                    <Image src={"/image/node.png"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        NodeJs
                       </Typography> 
                    </Box>
                    
                </Grid>
                </Box>
        </BoxStyled>
        </>
    )
}

export default Skill;