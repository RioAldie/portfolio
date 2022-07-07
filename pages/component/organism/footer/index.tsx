import { Box, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import Image from "next/image";
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
        <BoxStyled flex={2} p={0}  bgcolor={'#1e1e1e'} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop:30}}>
            <Box sx={{ width: '80%', p: 2}}>
                <Typography variant={'h5'}>
                    Get In Touch
                </Typography>
                <Box sx={{display:'flex', flexDirection:{xs:'column',md:'row'},mt:2}}>
                    <Typography variant="body2" color={'#bfbfbf'}>
                        For Bussines inquiry please send email to 
                    </Typography>
                    <Link href={'#'}>
                        <Typography variant={'body2'} color={'#F2F609'}  sx={{cursor:'pointer',ml:{xs:0,md:1}}}>
                         rioaldierwanto@email.com
                        </Typography>
                    </Link>
                </Box>
                
                <Boxicons>
                    <GitHubIcon fontSize="small"/>
                    <InstagramIcon fontSize="small"/>
                    <LinkedInIcon fontSize="small"/>
                    <WhatsAppIcon fontSize="small"/>
               </Boxicons>  
            </Box>
            <Box sx={{display:{xs:'none',sm:"block"}}}>
                <Image src={"/icon/kuda.svg"} width={30} height={40} />
                <Image src={"/icon/gift.svg"} width={99} height={110}/>
                <Image src={"/icon/chess-pawn.svg"} width={30} height={40} />
                <Image src={"/image/js-logo.png"} height={40} width={40}></Image>
            </Box>
            
            
        </BoxStyled>
    </>)
}

export default Footer;