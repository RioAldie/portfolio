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
        <BoxStyled flex={0.8} p={1} sx={{width:{sm:'100%',md:'80%',alignItems:'center'}}} >
            <Box  bgcolor={'background.default'} id="project" sx={{width:{xs:'80%',sm: '80%'}}}>
                <Image src={"/icon/chess-pawn.svg"} width={24} height={26} alt=""></Image>
                <Typography variant="h4" fontFamily={'Roboto'} color={'#F2F609'}>Selected Projects</Typography>
            </Box>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row'}, alignItems:{ xs: 'center' , md:'unset'}, justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ProjectItem image="project-2.png" title={"GetMovie"} body={"React Js,Material Ui, Next Js, Rest API"} website={"https://getmovie-rioaldie.vercel.app/"}/>
                
            </Box>
            
        </BoxStyled>
        </>
    )
}