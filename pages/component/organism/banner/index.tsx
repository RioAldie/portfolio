import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

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
    width: '250px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})
export default function Banner(){
    return(
        <>
       
            <BoxStyled  flex={2} p={0} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Box sx={{flex: {sm: 1, md: 0.7}}} maxWidth={700}>
                    <BannerText sx={{display:{xs: 'none', sm: 'block'}}} >rioaldie</BannerText>
                    <Image src={"/icon/mahkota.svg"} width={20} height={20}></Image>
                    <Typography variant="h4" fontFamily={"'Roboto', sans-serif"} fontWeight={'Bold'} color={'#F2F609'}>Hi, Im Rio Aldi Erwanto</Typography>
                    <Typography variant="h3" fontFamily={"'Roboto', sans-serif"} fontWeight={'Bold'} marginTop={1}>FrontEnd Developer Who is Interested in React.</Typography>
                    <Typography variant="body1" color={'paper'} fontFamily={"'Roboto', sans-serif"} fontWeight={'Normal'} marginTop={3}>I’m from Indonesia and I have been studying of Web Development Especially Javascript for more than 2 years. I’ve Learned React Lifecycle like React-Hooks, React-Router, Redux, Styled Component, Material UI, and Next JS, I've built web E-commerce with MERN stack, Simple Social Media, and  Personal Portfolio website. I’ve been freelancing for the last 1 year, and right now I am looking forward to working as a team and collaborating, an internship, or full-time with you!.</Typography>
                        <ButtonStyled>
                            <Image src={"/icon/amplop.svg"} width={108} height={47}></Image>
                            <Image src={"/icon/download.svg"} width={115} height={30}></Image>
                        </ButtonStyled> 
                </Box>
                </BoxStyled>
       
         
        </>
    )
}