import { Box, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';


const BoxStyled =  styled(Box)({
    maxWidth: '100%',
    height: 150,
    display: 'flex'
});
const Boxicons = styled(Box)({
    width: '200px',
    minHeight: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    
})
const Footer = () =>{
    return(<>
        <BoxStyled flex={2} p={0}  bgcolor={'secondary'} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Box sx={{ width: '80%', p: 2}}>
                <Typography variant={'h5'}>
                    Get In Touch
                </Typography>
                <Typography variant="body2" color={'#bfbfbf'}>
                    For Bussines inquiry please send email to
                </Typography>
                <Link href={'#'}>
                    <Typography variant={'body2'} color={'#fff'}>
                        rioaldierwanto@email.com
                    </Typography>
                </Link>
                <Boxicons>
                    <GitHubIcon fontSize="small"/>
                    <InstagramIcon fontSize="small"/>
                    <LinkedInIcon fontSize="small"/>
                    <WhatsAppIcon fontSize="small"/>
               </Boxicons>  
            </Box>
        </BoxStyled>
    </>)
}

export default Footer;