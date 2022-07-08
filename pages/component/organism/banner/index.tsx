import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const BoxStyled = styled(Box)({
    minHeight: 700,
    display: 'flex'
});
const BannerText = styled('div')({
        fontFamily: "'Oswald',sans-serif",
        fontWeight: '200',
        color: '#FEFEFE0D',
        fontSize: '288px',
        position: 'absolute',
        top: '50px',
        left: '80px'
});
const ButtonStyled = styled('div')({
    width: '300px',
    minHeight: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
})
const Boxicons = styled(Box)({
    width: '200px',
    minHeight: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    
})
export default function Banner(){
    return(
        <>
       
            <BoxStyled  flex={2} p={0} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{mt: {sm: 'p40px'}}}>
                <Box sx={{flex: {sm: 1, md: 0.7}}} maxWidth={700} id="profile">
                    <BannerText sx={{display:{xs: 'none', sm: 'block'}}} >rioaldie</BannerText>
                    <Image src={"/icon/mahkota.svg"} width={20} height={20} alt=""></Image>
                    <Typography variant="h4" fontFamily={"'Roboto', sans-serif"} fontWeight={'Bold'} color={'#F2F609'}>Hi, Im Rio Aldi Erwanto</Typography>
                    <Typography variant="h3" fontFamily={"'Roboto', sans-serif"} fontWeight={'Bold'} marginTop={1}>FrontEnd Developer Who is Interested in React.</Typography>
                    <Typography variant="body1" color={'paper'} fontFamily={"'Roboto', sans-serif"} fontWeight={'Normal'} marginTop={3}>I’m from Indonesia and I have been studying Web Development Especially Javascript for more than 2 years. I’ve Learned React Lifecycle like React-Hooks, React-Router, Redux, Styled Component, Material UI, and Next JS. I’ve been learning in Dicoding, Buildwithangga, and Youtube for the last 2 years, and right now I am looking forward to working an internship, part-time or full-time.</Typography>
                        <ButtonStyled>
                            <Link href={'mailto:rioaldierwanto@email.com'}>
                                <a target="_blank" rel="noopener noreferrer">
                                <Image src={"/icon/amplop.svg"} width={108} height={47} alt='Mail'></Image>
                                </a>
                            </Link>
                            
                            <Image src={"/icon/download.svg"} width={115} height={30} alt=""></Image> 
                        </ButtonStyled> 
                        <Boxicons>
                            <Link  href={'https://github.com/RioAldie'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon fontSize="large"/>
                                </a>
                            </Link>
                            <Link  href={'https://www.instagram.com/rioaldie/'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon fontSize="large"/>
                                </a>
                            </Link>
                            <Link  href={'https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon fontSize="large"/>
                                </a>
                            </Link>   
                            <Link  href={'https://wa.me/+62895702695858'} >
                                <a target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon fontSize="large"/>
                                </a>
                            </Link>   
                                
                                
                            </Boxicons>
                </Box>
                </BoxStyled>
       
         
        </>
    )
}