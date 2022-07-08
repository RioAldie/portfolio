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
                    <Link href={'mailto:rioaldierwanto@email.com'}>
                        <Typography variant={'body2'} color={'#F2F609'}  sx={{cursor:'pointer',ml:{xs:0,md:1}}}>
                         rioaldierwanto@email.com
                        </Typography>
                    </Link>
                </Box>
                
                <Boxicons>
                <Link  href={'https://github.com/RioAldie'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon fontSize="small"/>
                                </a>
                            </Link>
                            <Link  href={'https://www.instagram.com/rioaldie/'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon fontSize="small"/>
                                </a>
                            </Link>
                            <Link  href={'https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon fontSize="small"/>
                                </a>
                            </Link>   
                            <Link  href={'https://wa.me/+62895702695858'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon fontSize="small"/>
                                </a>
                            </Link>   
                    
                    
                    
                    
               </Boxicons>  
            </Box>
            <Box sx={{display:{xs:'none',sm:"block"}}}>
           
                <Image src={"/icon/kuda.svg"} width={30} height={40} alt=""/>
                <Image src={"/icon/gift.svg"} width={99} height={110} alt=""/>
                <Image src={"/icon/chess-pawn.svg"} width={30} height={40} alt=""/>
                <Image src={"/image/js-logo.png"} height={40} width={40} alt=""></Image>
            </Box>
            
            
        </BoxStyled>
    </>)
}

export default Footer;