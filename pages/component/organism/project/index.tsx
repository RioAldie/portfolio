import { Box, styled, Typography } from "@mui/material";
import CardProject from "./cardProject";
import Image from "next/image";
import ProjectItem from "../../molekuls/project-item";

const BoxStyled = styled(Box)({
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column'
   
});
export default function Project(){
    return(
        <>
        <BoxStyled flex={0.8} p={1} sx={{width:{sm:'100%',md:'80%'}}} >
        <Box  bgcolor={'background.default'}>
                <Image src={"/icon/chess-pawn.svg"} width={24} height={26}></Image>
                <Typography variant="h4" fontFamily={'Roboto'} color={'#F2F609'}>Selected Projects</Typography>
            </Box>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row'}, alignItems:{ xs: 'center' , md:'unset'}, justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ProjectItem image="project-2.png"/>
                
            </Box>
            
        </BoxStyled>
        </>
    )
}