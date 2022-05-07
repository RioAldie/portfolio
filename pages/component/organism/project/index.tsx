import { Box, styled } from "@mui/material";
import CardProject from "./cardProject";

const BoxStyled = styled(Box)({
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column'
   
});
export default function Project(){
    return(
        <>
        <BoxStyled flex={1} p={1} >
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row'}, alignItems:{ xs: 'center' , md:'unset'}, justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </Box>
            
        </BoxStyled>
        </>
    )
}