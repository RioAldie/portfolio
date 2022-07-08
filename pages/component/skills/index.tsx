import { PhoneAndroid, PhoneCallback } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled, Typography } from "@mui/material";
import Image from "next/image";

const BoxStyled = styled(Box)({
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column'
});
export default function Skills(){
    return(
        <>
        <BoxStyled flex={0.8} p={1} width={'80%'}>
            <Box  bgcolor={'background.default'} id={'skills'}>
                <Image src={"/icon/kuda.svg"} width={24} height={26} alt=""></Image>
                <Typography variant="h4" fontFamily={'Roboto'} color={'#F2F609'}>My Skills</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row'}, alignItems:{ xs: 'center' , md:'unset'}, justifyContent: 'center'}}>
                <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                >
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/image/html.png"} height={60} width={60}></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>HTML 5</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/css.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>CSS 3</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/image/js-logo.png"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Javascript</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/image/node.png"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Node Js</Typography>
                </ListItemButton>
                </List>
                <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                >
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/reactjs.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>ReactJS</Typography>
                </ListItemButton>
               
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/next.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>NextJS</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/tailwind.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Tailwind</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/mui.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Material UI</Typography>
                </ListItemButton>
                </List>
                <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                >
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/github.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Github</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/figma.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Figma</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/sass.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>Sass</Typography>
                </ListItemButton>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemIcon>
                    <Image src={"/icon/mongodb.svg"} height={60} width={60} alt=""></Image>
                    </ListItemIcon>
                    <Typography variant="h5" sx={{ width: '150px'}}>MongoDB</Typography>
                </ListItemButton>
                </List>
            </Box>
            
        </BoxStyled>
        
        </>
    )
}